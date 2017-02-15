import * as React from 'react';
import { camelizeKeys } from 'humps';
import { Product } from 'internals/Product';

const products = require('../data/products.json');

const props = camelizeKeys({
  products,
  component: Product
})

export default ({ Component }) => (
  <div style={{ margin: 50, position: 'relative' }}>
    <Component { ...props } />
  </div>
);
