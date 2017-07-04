import * as React from 'react';
import * as cx from 'classnames';
import {
  withHandlers, branch, renderComponent, withState,
  compose, withProps, renderNothing, withPropsOnChange,
  createEagerElement, 
} from 'recompose';
import { AutoSizer } from 'react-virtualized/dist/commonjs/AutoSizer';
import { List } from 'react-virtualized/dist/commonjs/List';
import { CellMeasurer, CellMeasurerCache } from 'react-virtualized/dist/commonjs/CellMeasurer';
import { Item } from './Checkbox';

const styles = require('./styles.css');
const customStyles = require('customStyles');

const cache = new CellMeasurerCache({
  defaultHeight: 30,
  fixedHeight: false
});

const StaticList = ({ items, className, itemComponent = Item, showAll, ...rest }) => (
  <div className={cx(styles.list, className)}>
    { 
      items.map(item =>
        createEagerElement(itemComponent, {
          ...rest,
          item,
          key: item.value,
          title: item.label || item.value
        })
      )
    }
  </div>
);

const VirtualizedList = withProps(({ items, itemComponent = Item, ...rest }) => ({
  rowRenderer: ({ index, key, style }) => {
    return createEagerElement(itemComponent, {
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
        cache={cache}
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
