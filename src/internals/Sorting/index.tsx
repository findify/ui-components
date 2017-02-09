import * as React from 'react';
import Dropdown from 'react-dropdown';
import { compose, withProps, withPropsOnChange, withState } from 'recompose';

const styles = require('./styles.css');

export const Sorting = compose(
  withPropsOnChange(['value'], ({ i18n, options, value }: any) => ({
    options: options.map(option => ({ value: option, label: i18n.options[option] || option })),
    value: { value, label: i18n.options[value] }
  })),
)
(({ i18n, options, onChange, value }: any) =>
  <div className={styles.wrap}>
    <p className={styles.title}>{i18n.title}</p>
    <Dropdown baseClassName={styles.dropdown} onChange={onChange} options={options} value={value} />
  </div>
);
