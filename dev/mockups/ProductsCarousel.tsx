import * as React from 'react';
import { camelizeKeys } from 'humps';

const products = require('../data/products.json');

const props = camelizeKeys({
  // TODO: need to rename `products` prop to items to correspond SA api.
  products,
  slidesToShow: 5,
  title: 'CUSTOMERS WHO VIEWED THIS ALSO VIEWED',
})

export default ({ Component }) => (
  <div style={{ margin: 50, position: 'relative' }}>
    <Component { ...props } />
  </div>
);
