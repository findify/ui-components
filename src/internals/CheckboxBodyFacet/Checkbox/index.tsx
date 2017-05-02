import * as React from 'react';
import { withHandlers } from 'recompose';
import * as cx from 'classnames';

const styles = require('./styles.css');
const customStyles = require('customStyles');

export const Item = withHandlers({
  onClick: ({ onChange, item }: any) => () => 
    onChange({ ...item, selected: !item.selected })
})(({
  title,
  item,
  onClick,
  style
}: any) => (
  <div 
    style={style}
    className={cx(
      styles.item,
      customStyles.facetItem,
      item.selected && styles.selected,
      item.selected && customStyles.facetItemSelected,
    )}
    onClick={onClick}>
    <div className={cx(styles.checkbox, 'fa', item.selected ? 'fa-check-square' : 'fa-square-o')} />
    <span
      className={styles.title}>
      { title }
    </span>
    <span className={styles.count}>({ item.count })</span>
  </div>
));
