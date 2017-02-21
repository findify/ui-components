import * as React from 'react';
import { camelizeKeys } from 'humps';

const props = camelizeKeys({
  items: require('../data/raw.json').items,
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
