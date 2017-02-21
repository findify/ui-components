import * as React from 'react';
import { compose, withState } from 'recompose';
import config from '../data/config';

const props = {
  filters: require('../data/raw.json').meta.filters,
  onChange: console.log,
  total: 20,
  query: 'something',
  config: {
    facets: config.facets
  }
};

export default compose(
  withState('initialData', 'setData', props),
)
(({ Component, initialData, setData }: any) => (
  <div style={{ margin: 50, width: 600, position: 'relative' }}>
    <Component { ...initialData } onChange={index =>
      setData({ ...initialData, filters: initialData.filters.filter((_, i) => index !== i) })
    }/>
  </div>
));
