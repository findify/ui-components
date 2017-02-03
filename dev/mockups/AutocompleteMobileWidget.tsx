import * as React from 'react';
import { noop } from 'lodash';

const props = {
  query: "fru",
  onInput: noop,
  onSubmit: noop,
  onClearClick: noop,
  searchSuggestions: [
    'fruit',
    'fruit gift',
    'frog',
    'fruit gift basket',
    'fine',
    'free',
    'fresh',
  ]
};

export default ({ Component }) => (
  <div style={{ margin: 50, width: 400, height: 700, position: 'relative' }}>
    <Component { ...props } />
  </div>
);
