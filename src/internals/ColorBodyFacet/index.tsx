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
    onClick: ({ onChange, title, selected }: any) => e =>
      onChange({ key: title, selected: !selected  }),
  })
)(({
  selected,
  title,
  background,
  onClick,
  checkMarkStyles,
}: ItemType) => (
  <button
    className={cx(styles.item, title === 'Multicolor' && 'multiply-gradient')}
    style={{ background }}
    onClick={onClick}>
    { selected && <span style={checkMarkStyles} className={cx(styles.checkMark, 'fa', 'fa-check')}/>}
  </button>
));


export const ColorBodyFacet = ({
  values,
  ...rest
}: any) => (
  <div className={styles.list}>
    {
      values.map(item => <Item {...rest} {...{ ...item, title: item.key }} />)
    }
  </div>
);


type ItemType = {
  checkMarkStyles: any,
  onClick: any,
  background: string,
  title: string,
  selected: boolean
}
