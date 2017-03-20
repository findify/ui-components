import * as React from 'react';
import * as cx from 'classnames';
const styles = require('./styles.css');

export const Button: any = ({ onClick, children, className }) => (
  <button onClick={onClick} className={cx(styles.root, className)}>
    { children }
  </button>
)
