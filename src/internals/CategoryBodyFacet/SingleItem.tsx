import * as React from 'react';
import * as cx from 'classnames';

const styles = require('./styles.css');

export const SingleItem = ({
  title,
  count,
  onClick,
  selected,
  index,
  style
}: any) => (
  <li
    style={style}
    onClick={onClick}
    className={cx(styles.item, selected && styles.selected)}>
    <p className={styles.title}>{ title }</p>
    <span className={styles.count}>({ count })</span>
  </li>
);
