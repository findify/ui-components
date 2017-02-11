import * as React from 'react';
import * as cx from 'classnames';
import { withHandlers, branch, renderComponent, compose, withProps, renderNothing } from 'recompose';
import { List, AutoSizer } from 'react-virtualized';

const styles = require('./styles.css');

const Item = withHandlers({
  onClick: (props: any) => () => props.onChange(props.title, !props.selected)
})(({
  value,
  title,
  selected,
  count,
  onClick,
  style
}: any) => (
  <div style={style} className={cx(styles.item, selected && styles.selected)} onClick={onClick}>
    <div className={cx(styles.checkbox, 'fa', selected ? 'fa-check-square' : 'fa-square-o')} />
    <span className={styles.title}>{ title }</span>
    <span className={styles.count}>({ count })</span>
  </div>
));

const VirtualizedList = ({ items, rowRenderer, rowHeight, maxItemsCount }) => (
  <AutoSizer disableHeight>
    {
    ({ width }) =>
      <List
        className={styles.list}
        width={width}
        height={maxItemsCount * rowHeight}
        rowCount={items.length}
        rowHeight={rowHeight}
        rowRenderer={rowRenderer} />
    }
  </AutoSizer>
);

export const ListRenderer = branch(
  ({ isStatic }: any) => isStatic,
  renderComponent(({ items, maxItemsCount, className, ...rest }) => (
    <div className={cx(styles.list, className)}>
      { [...items.slice(0, maxItemsCount)].map(item => <Item {...item} {...rest} title={item.key} />) }
    </div>
  )),
  compose(
    withProps(({ items, ...rest }) => ({
      rowRenderer: ({ index, key, style }) =>
        <Item {...items[index]} {...rest} title={items[index].key} key={key} style={style} />
    })),
    renderComponent(VirtualizedList)
  )
)(renderNothing);
