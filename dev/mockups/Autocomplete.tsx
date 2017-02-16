import * as React from 'react';
import { noop } from 'lodash';

const props = {
  i18n: {
    suggestionsTitle: 'Search suggestions',
    productMatchesTitle: 'Product matches',
    tipTitle: 'Press enter to search',
  },
  direction: 'ltr',
  // TODO: Replace `query` prop by `meta` prop from search API.
  query: 'fru',
  onSearchSuggestionClick: noop,
  onTipClick: noop,
  // TODO: Need to change product interface, to match search API data interface.
  products: [{
    link: '/test',
    imageLink: 'http://placehold.it/300x300',
    title: 'Test product',
    price: '$300.00',
    discountPrice: '$250.00',
  }, {
    link: '/test',
    imageLink: 'http://placehold.it/300x300',
    title: 'Test product',
    price: '$300.00',
    discountPrice: '$250.00',
  }, {
    link: '/test',
    imageLink: 'http://placehold.it/300x300',
    title: 'Test product',
    price: '$300.00',
    discountPrice: '$250.00',
  }, {
    link: '/test',
    imageLink: 'http://placehold.it/300x300',
    title: 'Test product',
    price: '$300.00',
    discountPrice: '$250.00',
  }],
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
