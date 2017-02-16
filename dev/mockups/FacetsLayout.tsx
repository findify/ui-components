import * as React from 'react';
import { compose, withReducer, withHandlers } from 'recompose';

// const rootStyle = {
//   position: 'fixed',
//   backgroundColor: 'rgba(0,0,0,.75)',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   zIndex: 2
// };

// const containerStyle = {
//   position: 'absolute',
//   left: 0,
//   width: '75%',
//   top: 0,
//   bottom: 0,
// };

const reducer = (state, action) => {
  console.log(action);
  return state;
};

const props = {
  facets: require('../data/facets.json')
};

const emulateMJS = withReducer('facets', 'onChange', reducer, props => props.facets);

export default ({ Component }) => {
  const Container = emulateMJS(Component);
  return (
    <div style={{ margin: 50, width: 400, position: 'relative' }}>
      <Container {...props} />
    </div>
  )
};
