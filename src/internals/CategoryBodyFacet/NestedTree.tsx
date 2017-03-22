import * as React from 'react';
import * as cx from 'classnames';
import { compose, renderNothing, renderComponent, withProps } from 'recompose';
import { List, AutoSizer } from 'react-virtualized';

const styles = require('./styles.css');
const { branch } = require('recompose');

const NestingComponent = ({ isRoot, ...rest }) => React.createElement('div', rest);

const StaticList = ({ selected, Nested, children, ...rest }: any) => (
  <div className={styles.list}>
    { 
      children.map((item, index) =>
        <Nested
          {...rest}
          {...item}
          key={item.value}
          title={item.value}
          index={index} />
      )
    }
  </div>
);
  
const VirtualizedList = ({ items, rowRenderer, rowHeight, itemsCount }: any) => (
  <div className={styles.list}>
    <AutoSizer disableHeight>
      {
        ({ width }) =>
          <List
            width={width}
            height={itemsCount * rowHeight}
            rowCount={items.length}
            rowHeight={rowHeight}
            rowRenderer={rowRenderer} />
      }
    </AutoSizer>
  </div>
);

const ListRenderer = compose(
  branch(
    ({ selected }: any) => !selected,
    renderNothing
  ),

  branch(
    ({ isExpanded, childrenCount, hasSelectedSiblings, config }: any) =>
      isExpanded && !hasSelectedSiblings && childrenCount > config.maxItemsCount,

    compose(
      withProps(({ Nested, children, ...rest }: any) => ({
        rowHeight: rest.config.rowHeight,
        itemsCount: rest.config.maxItemsCount,
        items: children,
        rowRenderer: ({ index, key, style }) =>
            <Nested
              {...rest}
              {...children[index]}
              title={children[index].value}
              key={key}
              style={style}
              index={index} />
        })),
      renderComponent(VirtualizedList)
    ),
  
    compose(
      withProps(({ children, config }: any) => ({
        children: [...children.slice(0, config.maxItemsCount)]
      })),
      renderComponent(StaticList)
    )
  ),
)(renderNothing);

export const NestedList = ({
  onClick,
  isRoot,
  title,
  count,
  className,
  selected,
  style,
  ...rest
}: any) => (
  <NestingComponent
    isRoot={isRoot}
    style={style}
    className={cx(className || styles.nestedItem, isRoot && styles.rootItem)}>
    { 
      !isRoot &&
      <div className={cx(styles.item, selected && styles.selected)} onClick={onClick}>
        <p className={styles.title}>
          <span className={cx(styles.prevIcon, 'fa', 'fa-chevron-left')} />
          { title }
          <span className={cx(styles.nextIcon, 'fa', `fa-chevron-${selected ? 'down' : 'right'}`)} />
        </p>
        <span className={styles.count}>({ count })</span>
      </div>
    }
    <ListRenderer {...{...rest, parentTitle: title, selected}} />
  </NestingComponent>
);

const RootWrapper = (props: any) => (
  <NestingComponent
    isRoot
    style={props.style}
    className={cx(styles.nestedItem, styles.rootItem)}>
    <div className={cx(styles.item, styles.selected)} onClick={props.onClick}>
      <p className={styles.title}>
        <span className={cx(styles.prevIcon, 'fa', 'fa-chevron-left')} />
        { props.config.i18n.goBackTitle }
      </p>
    </div>
    <ul className={styles.list}>
      <NestedList {...props} />
    </ul>
  </NestingComponent>
);

export const NestedTree = branch(
  ({ cursor, selected, isRoot }: any) => 
    !isRoot && selected && cursor.size === 1,
  renderComponent(RootWrapper),
  renderComponent(NestedList),
)(renderNothing);
