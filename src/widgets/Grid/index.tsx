import * as React from 'react';
import { compose, withPropsOnChange, createEagerFactory, setDisplayName } from 'recompose';
import * as cx from 'classnames';

const styles = require('./styles.css');

const Column = createEagerFactory(({ className, children, columnClass, columnStyle }: any) => (
  <div className={cx(styles.column, className, columnClass)} style={columnStyle}>
    { children }
  </div>
))

export const Grid: any = compose(
  setDisplayName('Grid'),
  withPropsOnChange(['columns', 'children'], ({ columns, children }: GridType) => {
    const classNames = columns.split('|').map(value => styles[`column-${value}`]);
    return {
      children: React.Children.map(children, (child: any, index: number) => child &&
        Column({
          key: child.key,
          children: child,
          className: classNames[index] || classNames[0],
          columnClass: child.props.columnClass,
          columnStyle: child.props.columnStyle
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
