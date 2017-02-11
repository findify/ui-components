import * as React from 'react';

const rootStyle = {
  position: 'fixed',
  backgroundColor: 'rgba(0,0,0,.75)',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 2
};

const containerStyle = {
  position: 'absolute',
  left: 0,
  width: '75%',
  top: 0,
  bottom: 0,
};

const props = {
  facets: require('../data/facets.json')
};

export default ({ Component }) => (
  <div style={rootStyle}>
    <div style={containerStyle}>
      <Component { ...props } />
    </div>
  </div>
);
