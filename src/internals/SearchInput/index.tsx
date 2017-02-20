import * as React from 'react';
import * as cx from 'classnames';
import { withHandlers } from 'recompose';

const styles = require('./styles.css');

export const SearchInput = withHandlers({
  onChange: ({ onChange }: any) => e => onChange(e.target.value)
})
(({
  onChange,
  value
}: any) => (
  <div className={styles.wrap}>
    <span className={cx(styles.icon, 'fa', 'fa-search')} />
    <input  type='search' className={styles.input} onChange={onChange} defaultValue={value} />
  </div>
));
