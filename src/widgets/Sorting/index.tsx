import * as React from 'react';
import Dropdown from 'react-dropdown';
import { compose, flattenProp, setDisplayName, withProps, withPropsOnChange, withState } from 'recompose';
import * as cx from 'classnames';
import withConfig from 'helpers/withConfig';

const styles = require('./styles.css');

// RESOLVED: TODO: Should be stateless as well as other components.
export const Sorting: any = compose(
  setDisplayName('Sorting'),
  flattenProp('value'),
  withConfig({
    i18n: {
      options: {}
    }
  }),
  withPropsOnChange(['value'], ({ config, options, value }: any) => ({
    value: { value, label: config.i18n.options[value] },
    options: options.map(option =>
      ({ value: option, label: config.i18n.options[option] || option })
    )
  })),
)(({
  config,
  options,
  onChange,
  value,
  style,
  className,
  isMobile
}: any) =>
  <div className={cx(styles.root, className, isMobile && styles.mobile)} style={style}>
    { !isMobile && config.i18n.title && <p className={styles.title}>{config.i18n.title}</p> }
    <Dropdown
      baseClassName={styles.dropdown}
      onChange={onChange} options={options} value={value} />
  </div>
);
