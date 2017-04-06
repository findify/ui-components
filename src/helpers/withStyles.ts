import { compose, withPropsOnChange, getContext } from 'recompose';
import { findDOMNode } from 'react-dom';
import { isArray, get, last } from 'lodash';
import { PropTypes } from 'react';

const emptyStyles = {};

export default gettersArray => BaseComponent => {
  const keys = gettersArray.map(getter => last(getter.split('.')));
  return compose(
    getContext({ styles: PropTypes.object }),
    withPropsOnChange(['styles'], ({ styles }) => ({
      styles: gettersArray.reduce((acc, getter, i) =>
        ({ ...acc, [keys[i]]: get(styles, getter) || emptyStyles })
      , {})
    }))
  )(BaseComponent);
}
