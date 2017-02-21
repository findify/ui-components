import * as React from 'react';
import { noop } from 'lodash';

const props = {
  config: {
    direction: 'ltr',
    i18n: {
      suggestionsTitle: 'Search suggestions',
      productMatchesTitle: 'Product matches',
      tipTitle: 'Press enter to search',
    },
  },
  meta: {
    query: 'fru',
  },
  onSearchSuggestionClick: console.log,
  onTipClick: console.log,
  // TODO: Need to change product interface, to match search API data interface.
  // TODO: Need to rename `products` prop to `items`.
  items: require('../data/raw.json').products,
  // TODO: Should match SA response data
  suggestions: [
    'fruit',
    'fruit gift',
    'frog',
    'fruit gift basket',
    'fine',
    'free',
    'fresh',
  ],
};

export default ({ Component }) => (
  <div>
    <div style={{ margin: 50 }}>
      <Component isMobile { ...props } />
    </div>
    <div style={{ margin: 50 }}>
      <Component isMobile isMobileSimple { ...props } />
    </div>
    <div style={{ margin: 50 }}>
      <Component { ...props } />
    </div>
  </div>
);
