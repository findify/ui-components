import * as React from 'react';
import * as cx from 'classnames';
import { branch, renderNothing, renderComponent, withProps } from 'recompose';

const styles = require('./styles.css');

const NestingComponent = ({ isRoot, ...rest }) => React.createElement(isRoot ? 'div' : 'li', rest);

export const NestedList = ({
  children,
  onClick,
  isRoot,
  title,
  count,
  className,
  selected,
  cursor,
  Nested,
  ...rest
}: any) => (
  <NestingComponent isRoot={isRoot} className={cx(className || styles.nestedItem)}>
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
    {
      selected &&
      <ul className={styles.list}>
        { 
          children.map((item, index) =>
            <Nested
              {...rest}
              {...item}
              parentTitle={title}
              title={item.key}
              index={index}
              cursor={cursor} />
          )
        }
      </ul>
    }
  </NestingComponent>
);

const RootWrapper = (props: any) => (
  <NestingComponent isRoot className={styles.nestedItem}>
    <div className={cx(styles.item)} onClick={props.onClick}>
      <p className={styles.title}>
        <span className={cx(styles.prevIcon, 'fa', 'fa-chevron-left')} />
        { props.parentTitle || props.goBackTitle }
      </p>
    </div>
    <ul className={styles.list}>
      <NestedList {...props} />
    </ul>
  </NestingComponent>
);

export const NestedTree = branch(
  ({ cursor, selected, isRoot }: any) =>
    !isRoot && selected && cursor.length === 1,
  renderComponent(RootWrapper),
  renderComponent(NestedList),
)(renderNothing);
