import * as React from 'react';
import { compose, withHandlers, withPropsOnChange } from 'recompose';
import * as cx from 'classnames';
import * as color from 'tinycolor2';

const styles = require('./styles.css');

const Item = compose(
  withPropsOnChange(['title'], ({ title }: any) => ({
    background: title !== 'Multicolor' && title.toLowerCase(),
    checkMarkStyles: ({ color: color(title).isDark() ? '#fff' : '#333'})
  })),
  withHandlers({
    onClick: ({ onChange, title, selected }: any) => e => onChange(title, !selected),
  })
)(({
  title,
  background,
  onClick,
  selected,
  checkMarkStyles,
}: any) =>
  <button
    className={cx(styles.item, title === 'Multicolor' && 'multiply-gradient')}
    style={{ background }}
    onClick={onClick}>
    { selected && <span style={checkMarkStyles} className={cx(styles.checkMark, 'fa', 'fa-check')}/>}
  </button>
);


export const ColorBodyFacet = ({
  list,
  ...rest
}: any) => (
  <div className={styles.list}>
    {
      list.map(item => <Item {...rest} {...item} {...{title: item.key}} />)
    }
  </div>
);
