import * as React from 'react';
import * as cx from 'classnames';

const styles = require('./styles.css');

export const SingleItem = ({ title, count, onClick, selected, cursor, index }: any) => (
  <li className={cx(styles.item, selected && styles.selected)} onClick={onClick}>
    <p className={styles.title}>{ title }</p>
    <span className={styles.count}>({ count })</span>
  </li>
);
