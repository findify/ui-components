import * as React from 'react';

import { AutocompleteWidget } from '../../../src';

function AutocompleteWidgetWrapper() {
  const props = {
    direction: 'ltr',
    onSearchSuggestionClick: (query: string) => {},
    productMatches: [{
      link: '/test',
      imageLink: 'http://placehold.it/300x300',
      title: 'Test product',
      price: 300,
      discountPrice: 250,
      reviewsCount: 3,
      rating: 4,
    }, {
      link: '/test',
      imageLink: 'http://placehold.it/300x300',
      title: 'Test product',
      price: 300,
      discountPrice: 250,
      reviewsCount: 3,
      rating: 4,
    }, {
      link: '/test',
      imageLink: 'http://placehold.it/300x300',
      title: 'Test product',
      price: 300,
      discountPrice: 250,
      reviewsCount: 3,
      rating: 4,
    }, {
      link: '/test',
      imageLink: 'http://placehold.it/300x300',
      title: 'Test product',
      price: 300,
      discountPrice: 250,
      reviewsCount: 3,
      rating: 4,
    }, {
      link: '/test',
      imageLink: 'http://placehold.it/300x300',
      title: 'Test product',
      price: 300,
      discountPrice: 250,
      reviewsCount: 3,
      rating: 4,
    }],
    searchSuggestions: [{
      title: 'Test suggestion',
      query: 'test-suggestion',
    }, {
      title: 'Test suggestion 2',
      query: 'test-suggestion-2',
    }, {
      title: 'Test suggestion 3',
      query: 'test-suggestion-3',
    }, {
      title: 'Test suggestion 4',
      query: 'test-suggestion-4',
    }, {
      title: 'Test suggestion 5',
      query: 'test-suggestion-5',
    }, {
      title: 'Test suggestion-6',
      query: 'test-suggestion-6',
    }, {
      title: 'Test suggestion-7',
      query: 'test-suggestion-7',
    }],
  };

  return (
    <div style={{
      margin: 20,
    }}>
      <AutocompleteWidget {...props} />
    </div>
  );
}

export {
  AutocompleteWidgetWrapper,
}
