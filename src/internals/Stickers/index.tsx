import * as React from 'react';
import { compose, createEagerElement, withProps } from 'recompose';
import { memoize, isArray } from 'lodash';
import template from 'helpers/template';
import { camelizeKeys, decamelize } from 'humps';
const styles = require('./styles.css');

const translateZ = 'translateY(-50%)';

const getPosition = memoize((position) => {
  const [y, x] = position.split('-');
  const root: any = {};
  let container: any = {};

  if (y === 'middle') {
    root.top = '50%';
    container = {
      WebkitTransform: translateZ,
      MsTransform: translateZ,
      transform: translateZ
    }
  } else {
    root[y] = 0;
  }
  if (x === 'center') {
    container.width = '100%';
  } else {
    container.float = x;
  }
  return { root, container };
});

const getContent = memoize((value, templates) => {
  if (!isArray(value)) return templates.single;
  if (value.length === 1) return template(templates.single)(value[0]);
  return template(templates.multiple)(Math.max.apply(Math, value));
})

const getStyles = memoize(styles => {
  const normalizedStyles = {
    ...styles,
    fontFamily: styles.fontFamily.replace(';', ''),
    fontSize: styles.fontSize + 'px',
  }
  return normalizedStyles;
});

const Sticker: any = compose(
  withProps(({ config, value, styles }) => ({
    position: getPosition(config.position),
    content: getContent(value, config.template),
    style: getStyles(config.styles)
  }))
)(({
  position,
  style,
  content
}: any) => (
    <div className={styles.root} style={position.root}>
      <div className={styles.sticker} style={{ ...position.container, ...style }}>
        {content}
      </div>
    </div>
));

export const Stickers: any = ({ stickers, config }) => React.DOM.div(
{},
  !!stickers && Object
  .keys(stickers)
  .filter(i => {
    const key = decamelize(i, { separator: '-' });
    return !!stickers[key] && !!config[key];
  })
  .map(key =>
    createEagerElement(Sticker, {
      key,
      value: stickers[key],
      config: config[key]
    })
  )
)
