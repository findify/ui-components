import * as React from 'react';
import { camelizeKeys } from 'humps';
import config from '../data/config';

const props = camelizeKeys({
  items: require('../data/raw.json').products,
  config: { ...config.productsGrid, product: config.product }
})

export default ({ Component }) => (
  <div style={{ margin: 50, position: 'relative' }}>
    <Component { ...props } />
  </div>
);
