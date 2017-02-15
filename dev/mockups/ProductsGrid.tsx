import * as React from 'react';
import { camelizeKeys } from 'humps';

const products = require('../data/products.json');

const props = camelizeKeys({
  products,
})

export default ({ Component }) => (
  <div style={{ margin: 50, position: 'relative' }}>
    <Component { ...props } />
  </div>
);
