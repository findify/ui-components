import * as React from 'react';
import * as cx from 'classnames';

const styles = require('./styles.css');

export const ExpandButton = ({
  expanded,
  onClick,
  label
}: any) => (
  <button className={styles.wrap} onClick={onClick}>
    <span className={cx(styles.icon, 'fa', expanded ? 'fa-minus' : 'fa-plus')} />
    { label }
  </button>
);
