import * as React from 'react';
import { camelizeKeys } from 'humps';

const products = require('../data/products.json');

const props = camelizeKeys({
  products,
  slidesToShow: 5,
  title: 'CUSTOMERS WHO VIEWED THIS ALSO VIEWED',
  productProps: {
    title: false,
    description: false,
    price: false,
    reviews: false
  }
})

export default ({ Component }) => (
  <div style={{ margin: 50, position: 'relative' }}>
    <Component { ...props } />
  </div>
);
