import * as React from 'react';
import { camelizeKeys } from 'humps';

const props = camelizeKeys({
  // TODO: need to rename `products` prop to items to correspond SA api.
  items: require('../data/raw.json').products,
  title: 'CUSTOMERS WHO VIEWED THIS ALSO VIEWED',
  config: {
    slidesToShow: 5,
    product: {}
  }
})

export default ({ Component }) => (
  <div style={{ margin: 50, position: 'relative' }}>
    <Component { ...props } />
  </div>
);
