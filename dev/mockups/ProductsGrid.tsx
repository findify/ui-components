import * as React from 'react';
import { camelizeKeys } from 'humps';

const items = require('../data/products.json');

const props = camelizeKeys({
  // TODO: need to rename `products` prop to items to correspond SA api.
  items,
})

export default ({ Component }) => (
  <div style={{ margin: 50, position: 'relative' }}>
    <Component { ...props } />
  </div>
);
