import * as React from 'react';

import { AutocompleteWidget } from '../../../src';
import { AutocompleteMobileWidget } from '../../../src';

function AutocompleteWidgetWrapper() {
  const props = {
    suggestionsTitle: 'Search suggestions',
    productMatchesTitle: 'Product matches',
    direction: 'ltr',
    query: 'fru',
    tipTitle: 'Press enter to search',
    onSearchSuggestionClick: (query: string) => { return; },
    onTipClick: () => { return; },
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

  return (
    <div>
      <div style={{
        margin: 50,
        width: 400,
        height: 700,
        position: 'relative',
      }}>
        <AutocompleteMobileWidget
          searchSuggestions={props.searchSuggestions}
          query="fru"
          onInput={() => { return; }}
          onSubmit={() => { return; }}
          onClearClick={() => { return; }}
        />
      </div>
      <div style={{
        margin: 50,
      }}>
        <AutocompleteWidget {...props} />
      </div>
      <div style={{
        margin: 50,
      }}>
        <AutocompleteWidget
          searchSuggestions={props.searchSuggestions}
          query="fru"
          onSearchSuggestionClick={(query: string) => { return; }}
        />
      </div>
    </div>
  );
}

export {
  AutocompleteWidgetWrapper,
}
