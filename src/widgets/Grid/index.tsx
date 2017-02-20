import * as React from 'react';
import { compose, withPropsOnChange, createEagerFactory, setDisplayName } from 'recompose';
import * as cx from 'classnames';

const styles = require('./styles.css');

const Column = createEagerFactory(({ className, children, columnClass }: any) => (
  <div className={cx(styles.column, className, columnClass)}>
    { children }
  </div>
))

export const Grid: any = compose(
  setDisplayName('Grid'),
  withPropsOnChange(['columns', 'children'], ({ columns, children }: GridType) => {
    const classNames = columns.split('|').map(value => styles[`column-${value}`]);
    return {
      children: React.Children.map(children, (child: any, index: number) =>
        Column({
          key: child.key,
          children: child,
          className: classNames[index] || classNames[0],
          columnClass: child.props.columnClass
        }))
    };
  })
)(({ children, className }: GridType) => (
  <div className={cx(styles.wrap, className)}>
    { children }
  </div>
));

type GridType = {
  children: any,
  columns: string,
  className?: string
}
