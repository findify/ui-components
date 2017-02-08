import * as React from 'react';
import { compose, withHandlers, withProps } from 'recompose';
import * as cx from 'classnames';

const styles = require('./styles.css');
const gradientUrl = '';

const Item = compose(
  withProps(({ title }: any) => ({
    background: title === 'Multicolor' ? `url(${gradientUrl})` : title.toLowerCase()
  })),
  withHandlers({
    onClick: ({ onChange, title, selected }: any) => e => onChange(title, !selected),
  })
)(({
  title,
  background,
  onClick,
  selected
}: any) =>
  <button
    className={cx(styles.item, selected && styles.selected)}
    style={{ background }}
    onClick={onClick} />
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
