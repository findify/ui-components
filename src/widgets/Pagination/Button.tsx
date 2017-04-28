import * as React from 'react';
import { compose, withHandlers, pure } from 'recompose';

import * as cx from 'classnames';

const styles = require('./styles.css');

export const Button: any = compose(
  pure,
  withHandlers({
    onClick: ({ onChange, page }: any) => e => {
      if (e) e.preventDefault();
      return onChange(page);
    }
  })
)(({
  label,
  onClick,
  active,
  className,
  prependIcon,
  appendIcon
}: any) =>
  <button onClick={onClick} className={cx(styles.button, active && styles.active, className)}>
    { prependIcon && <span className={cx(styles.icon, prependIcon)} />}
    { label }
    { appendIcon && <span className={cx(styles.icon, appendIcon)} />}
  </button>
);
