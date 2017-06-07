import * as React from 'react';
import * as cx from 'classnames';
import Icon from 'internals/Icon';
const styles = require('./styles.css');

export const ExpandButton = ({
  expanded,
  onClick,
  label
}: any) => (
  <button className={styles.wrap} onClick={onClick}>
    <Icon name={expanded ? 'minus' : 'plus'} className={styles.icon} />
    { label }
  </button>
);
