import * as React from 'react';
import Dropdown from 'react-dropdown';
import { compose, withProps, withPropsOnChange, withState } from 'recompose';

const styles = require('./styles.css');

// TODO: Should be stateless as well as other components.
export const Sorting = compose(
  withPropsOnChange(['value'], ({ i18n, options, value }: any) => ({
    options: options.map(option => ({ value: option, label: i18n[option] || option })),
    value: { value, label: i18n[value] }
  })),
)
(({ title, i18n, options, onChange, value }: any) =>
  <div className={styles.wrap}>
    { title && <p className={styles.title}>{title}</p> }
    <Dropdown baseClassName={styles.dropdown} onChange={onChange} options={options} value={value} />
  </div>
);
