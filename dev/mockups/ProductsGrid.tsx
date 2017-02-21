import * as React from 'react';

const props = {
  items: require('../data/raw.json').products
};

export default ({ Component }) => (
  <div style={{ margin: 50, position: 'relative' }}>
    <Component { ...props } />
  </div>
);
