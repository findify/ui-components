import * as React from 'react';
import * as cx from 'classnames';
import { withHandlers, branch, renderComponent, compose, withProps, renderNothing } from 'recompose';
import { List, AutoSizer } from 'react-virtualized';

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

const VirtualizedList = ({ items, rowRenderer, config }) => (
  <AutoSizer disableHeight>
    {
    ({ width }) =>
      <List
        className={styles.list}
        width={width}
        height={config.maxItemsCount * config.rowHeight}
        rowCount={items.length}
        rowHeight={config.rowHeight}
        rowRenderer={rowRenderer} />
    }
  </AutoSizer>
);

export const ListRenderer = branch(
  ({ isStatic }: any) => isStatic,
  renderComponent(({ items, config, className, ...rest }) => (
    <div className={cx(styles.list, className)}>
      { 
        [...items.slice(0, config.maxItemsCount)].map(item =>
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
    renderComponent(VirtualizedList)
  )
)(renderNothing);
