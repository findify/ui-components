import * as React from 'react';
import { compose, withHandlers, pure } from 'recompose';

import * as cx from 'classnames';

const styles = require('./styles.css');

export const Button = compose(
  withHandlers({
    onClick: ({ onChange, page }: any) => () => onChange(page)
  })
)(({
  label,
  onClick,
  active,
  className,
  append,
  prepend
}: any) =>
  <button onClick={onClick} className={cx(styles.button, active && styles.active, className)}>
    { prepend && <span className={cx(styles.icon, prepend)} />}
    { label }
    { append && <span className={cx(styles.icon, append)} />}
  </button>
);
