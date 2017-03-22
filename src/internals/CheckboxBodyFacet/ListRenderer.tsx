import * as React from 'react';
import * as cx from 'classnames';
import {
  withHandlers, branch, renderComponent, withState,
  compose, withProps, renderNothing, withPropsOnChange,
} from 'recompose';
import { List, AutoSizer } from 'react-virtualized';

const { WindowScroller } = require('react-virtualized');
const styles = require('./styles.css');

const Item = withHandlers({
  onClick: ({ onChange, item }: any) => () => 
    onChange({ ...item, selected: !item.selected })
})(({
  title,
  item,
  onClick,
  style
}: any) => (
  <div style={style} className={cx(styles.item, item.selected && styles.selected)} onClick={onClick}>
    <div className={cx(styles.checkbox, 'fa', item.selected ? 'fa-check-square' : 'fa-square-o')} />
    <span className={styles.title}>{ title }</span>
    <span className={styles.count}>({ item.count })</span>
  </div>
));

const VirtualizedList = ({ scrollTop, height, items, rowRenderer, config }) => (
  <AutoSizer disableHeight>
    {
    ({ width }) =>
      <List
        className={styles.list}
        width={width}
        scrollTop={scrollTop}
        height={height || config.maxItemsCount * config.rowHeight}
        rowCount={items.length}
        overscanRowCount={10}
        rowHeight={config.rowHeight}
        rowRenderer={rowRenderer} />
    }
  </AutoSizer>
);

const FullHeightScroll = withState(
  'parent', 'setParent', void 0
)(({
  setParent,
  parent,
  ...props
}: any) => (
  <div ref={r => r && setParent(r)} style={{ height: '100%' }}>
    <WindowScroller scrollElement={parent}>
      {
        scrollProps => <VirtualizedList {...props} {...scrollProps} />
      }
    </WindowScroller>
  </div>
))

export const ListRenderer: any = compose(
  withPropsOnChange(['slice', 'items'], ({ items, slice }) => ({
    items: !!slice ? [...items.slice(0, slice)] : items
  })),
  branch(
    ({ isStatic }: any) => isStatic,
    renderComponent(({ items, config, className, showAll, ...rest }) => (
      <div className={cx(styles.list, className)}>
        { 
          items.map(item =>
            <Item item={item} key={item.value} {...rest} title={item.label || item.value} />
          )
        }
      </div>
    )),
    compose(
      withProps(({ items, ...rest }) => ({
        rowRenderer: ({ index, key, style }) =>
          <Item item={items[index]} {...rest} title={items[index].value} key={key} style={style} />
      })),
      branch(
        ({ isMobile }) => !isMobile,
        renderComponent(VirtualizedList),
        renderComponent(FullHeightScroll)
      )
    )
  )
)(renderNothing);
