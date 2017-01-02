import * as React from 'react';

import { AutocompleteWidget } from '../../../src';

function AutocompleteWidgetWrapper() {
  const props = {
    suggestionsTitle: 'Search suggestions',
    productMatchesTitle: 'Product matches',
    direction: 'ltr',
    query: 'fru',
    tipTitle: 'Press enter to search',
    onSearchSuggestionClick: (query: string) => {},
    onTipClick: () => {},
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
    searchSuggestions: [{
      title: 'fruit',
      query: 'test-suggestion',
    }, {
      title: 'fruit gift',
      query: 'test-suggestion-2',
    }, {
      title: 'frog',
      query: 'test-suggestion-3',
    }, {
      title: 'fruit gift basket',
      query: 'test-suggestion-4',
    }, {
      title: 'fine',
      query: 'test-suggestion-5',
    }, {
      title: 'free',
      query: 'test-suggestion-6',
    }, {
      title: 'fresh',
      query: 'test-suggestion-7',
    }],
  };

  return (
    <div style={{
      margin: 50,
    }}>
      <AutocompleteWidget {...props} />
    </div>
  );
}

export {
  AutocompleteWidgetWrapper,
}
