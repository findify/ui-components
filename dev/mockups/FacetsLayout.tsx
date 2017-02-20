import * as React from 'react';
import { withFacets } from '../helpers/withFacets';

const props = {
  facets: require('../data/facets.json')
};

export default ({ Component }) => {
  const Container = withFacets(Component);
  return (
    <div style={{ margin: 50, width: 400, position: 'relative' }}>
      <Container {...props} />
    </div>
  )
};
