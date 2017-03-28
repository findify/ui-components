import * as React from 'react';
import { compose, withHandlers, withPropsOnChange, createEagerElement, pure } from 'recompose';
import * as cx from 'classnames';
import * as color from 'tinycolor2';

const styles = require('./styles.css');

const Item = compose(
  pure,
  withPropsOnChange(['title'], ({ title, config: { mapping } }: any) => ({
    background: title !== 'Multicolor' && mapping[title],
    checkMarkStyles: ({ color: color(title).isDark() ? '#fff' : '#333'})
  })),
  withHandlers({
    onClick: ({ onChange, selected, item }: any) => e => 
      onChange({ ...item, selected: !item.selected }),
  })
)(({
  title,
  background,
  item,
  onClick,
  checkMarkStyles,
}: any) =>
  <button
    className={cx(styles.item, title === 'Multicolor' && 'multiply-gradient')}
    style={{ background }}
    onClick={onClick}>
    { item.selected && <span style={checkMarkStyles} className={cx(styles.checkMark, 'fa', 'fa-check')}/>}
  </button>
);


export const ColorBodyFacet = ({
  values,
  ...rest
}: any) => (
  <div className={styles.list}>
    {
      values.map(item =>
        createEagerElement(Item, {
          ...rest,
          key: item.value,
          title: item.value,
          item
        })
      )
    }
  </div>
);
