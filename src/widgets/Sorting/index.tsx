import * as React from 'react';
import Dropdown from 'react-dropdown';
import { compose, withProps, withPropsOnChange, withState } from 'recompose';

const styles = require('./styles.css');

// TODO: Should be stateless as well as other components.
export const Sorting = compose(
  withPropsOnChange(['value'], ({ config, options, value }: any) => ({
    options: options.map(option => ({ value: option, label: config.i18n.options[option] || option })),
    value: { value, label: config.i18n[value] }
  })),
)
(({ config, options, onChange, value }: any) =>
  <div className={styles.root}>
    { config.i18n.title && <p className={styles.title}>{config.i18n.title}</p> }
    <Dropdown baseClassName={styles.dropdown} onChange={onChange} options={options} value={value} />
  </div>
);
