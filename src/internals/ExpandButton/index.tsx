import * as React from 'react';
import * as cx from 'classnames';

const styles = require('./styles.css');

export const ExpandButton = ({
  expanded,
  onClick
}: any) => (
  <button className={styles.expand} onClick={onClick}>
    <span className={cx('fa', expanded ? 'fa-minus' : 'fa-plus')} />
    { expanded ? 'less' : 'more' }
  </button>
);
