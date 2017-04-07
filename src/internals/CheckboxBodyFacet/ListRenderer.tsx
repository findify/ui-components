import * as React from 'react';
import * as cx from 'classnames';
import {
  withHandlers, branch, renderComponent, withState,
  compose, withProps, renderNothing, withPropsOnChange,
  createEagerElement, 
} from 'recompose';
import { AutoSizer } from 'react-virtualized/dist/commonjs/AutoSizer';
import { List } from 'react-virtualized/dist/commonjs/List';
import { CellMeasurer } from 'react-virtualized/dist/commonjs/CellMeasurer';

const styles = require('./styles.css');

const Item = withHandlers({
  onClick: ({ onChange, item }: any) => () => 
    onChange({ ...item, selected: !item.selected })
})(({
  title,
  item,
  onClick,
  style,
  styles: {
    facets: s
  }
}: any) => (
  <div 
    style={style}
    className={cx(styles.item, item.selected && styles.selected)}
    onClick={onClick}>
    <div className={cx(styles.checkbox, 'fa', item.selected ? 'fa-check-square' : 'fa-square-o')} />
    <span
      className={styles.title}>
      { title }
    </span>
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
  rowRenderer: ({ index, key, style }) => {
    return createEagerElement(Item, {
      ...rest,
      item: items[index],
      title: items[index].label || items[index].value,
      key,
      style
    })
  }
}))(({ isMobile, items, rowRenderer, config }: any) => (
  <AutoSizer disableHeight={!isMobile}>
    {
      ({ width, height }) =>
      <CellMeasurer
        cellRenderer={
          ({ rowIndex, ...rest }) => rowRenderer({ index: rowIndex, ...rest })
        }
        columnCount={1}
        rowCount={items.length}
        width={width}>
        {
          ({ getRowHeight, setRef }) =>
          <List
            width={width}
            ref={setRef}
            className={styles.list}
            height={isMobile ? height : config.maxItemsCount * config.rowHeight}
            rowCount={items.length}
            overscanRowCount={2}
            rowHeight={getRowHeight}
            rowRenderer={rowRenderer} />
        }
      </CellMeasurer>
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
