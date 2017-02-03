import * as React from 'react';
import { noop } from 'lodash';

const maximalProps = {
  suggestionsTitle: 'Search suggestions',
  productMatchesTitle: 'Product matches',
  direction: 'ltr',
  query: 'fru',
  tipTitle: 'Press enter to search',
  onSearchSuggestionClick: noop,
  onTipClick: noop,
  productMatches: [{
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
  searchSuggestions: [
    'fruit',
    'fruit gift',
    'frog',
    'fruit gift basket',
    'fine',
    'free',
    'fresh',
  ],
};

const minimalProps = {
  searchSuggestions: maximalProps.searchSuggestions,
  query: "fru",
  onSearchSuggestionClick: noop
};

export default ({ Component }) => (
  <div>
    <div style={{ margin: 50 }}>
      <Component { ...maximalProps } />
    </div>
    <div style={{ margin: 50 }}>
      <Component { ...minimalProps } />
    </div>
  </div>
);
