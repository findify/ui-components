import * as React from 'react';
import * as cx from 'classnames';

const styles = require('./styles.css');

const NestingComponent = ({ isRoot, ...rest }) => React.createElement(isRoot ? 'div' : 'li', rest);

export const NestedTree = ({
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
              title={item.key}
              index={index}
              cursor={cursor} />
          )
        }
      </ul>
    }
  </NestingComponent>
);
