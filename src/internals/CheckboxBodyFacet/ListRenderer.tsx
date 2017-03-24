import * as React from 'react';
import * as cx from 'classnames';
import {
  withHandlers, branch, renderComponent, withState,
  compose, withProps, renderNothing, withPropsOnChange,
  createEagerElement
} from 'recompose';
import { List, AutoSizer } from 'react-virtualized';
import sizeMe from 'react-sizeme';
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

const StaticList = ({ items, config, className, showAll, ...rest }) => (
  <div className={cx(styles.list, className)}>
    { 
      items.map(item =>
        createEagerElement(Item, {
          ...rest,
          item,
          key: item.value,
          title: item.label || item.value
        })
      )
    }
  </div>
);

const VirtualizedList = withProps(({ items, ...rest }) => ({
  rowRenderer: ({ index, key, style }) =>
    createEagerElement(Item, {
      ...rest,
      item: items[index],
      title: items[index].value,
      key,
      style
    })
}))(({ isMobile, items, rowRenderer, config }: any) => (
  <AutoSizer disableHeight={!isMobile}>
    {
    ({ width, height }) =>
      <List
        className={styles.list}
        width={width}
        height={height || config.maxItemsCount * config.rowHeight}
        rowCount={items.length}
        overscanRowCount={2}
        rowHeight={config.rowHeight}
        rowRenderer={rowRenderer} />
    }
  </AutoSizer>
));


export const ListRenderer: any = compose(
  withPropsOnChange(['slice', 'items'], ({ items, slice }) => ({
    items: !!slice ? [...items.slice(0, slice)] : items
  })),
  branch(
    ({ isStatic }: any) => isStatic,
    renderComponent(StaticList),
    renderComponent(VirtualizedList),
  )
)(renderNothing);
