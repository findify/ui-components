import * as React from 'react';
import * as cx from 'classnames';

import { SearchSuggestions } from 'internals/SearchSuggestions';
import { ProductMatches } from 'internals/ProductMatches';
import { createEagerElement } from 'recompose';

const styles = require('./styles.css');

export function AutocompleteBody({
  suggestions,
  items,
  onSearchSuggestionClick,
  onTipClick,
  selectedSuggestion,
  onProductClick,
  meta: {
    q: query
  },
  config: {
    position,
    i18n,
    ...config
  }
}: Props) {
  if (suggestions && !suggestions.length) return null;

  const searchSuggestionsNode = createEagerElement(
    SearchSuggestions,
    {
      selectedSuggestion,
      suggestions,
      onSearchSuggestionClick,
      query,
      title: i18n.suggestionsTitle,
    }
  ) 

  const productMatchesNode = !!items && !!items.length && createEagerElement(
    ProductMatches,
    {
      items,
      config,
      onProductClick,
      title: i18n.productMatchesTitle,
    }
  );

  return (
    // TODO: Missing block name.
    // TODO: Output className should be: findify-block-autocomplete findify-block-autocomplete_ltr
    // For elements we need to do: findify-block-autocomplete__element-name

    // Both TODOs are related to all components.
    <div className={styles.root}>
      <div className={cx(styles.wrap, styles[position])}>
        {
          position === 'right'
          && (
            <div className={styles.container}>
              {productMatchesNode}
              {searchSuggestionsNode}
            </div>
          ) || (
            <div className={styles.container}>
              {searchSuggestionsNode}
              {productMatchesNode}
            </div>
          )
        }
        {
          i18n.tipTitle && (
            <div
              className={styles.tip}
              onClick={() => onTipClick && onTipClick()} >
              { i18n.tipTitle }
              <span className={styles.tipQuery}>
                &nbsp;"{query}"
              </span>
            </div>
          )
        }
      </div>
    </div>
  );
};

type Props = {
  meta: {
    q: string
  },
  suggestions: string[],
  selectedSuggestion: number,
  onSearchSuggestionClick: (query: string) => void,
  items?: Product[],
  onTipClick?: () => void,
  onProductClick?: () => void,
  config: {
    currency: string,
    position: 'left' | 'right',
    i18n: {
      suggestionsTitle?: string,
      productMatchesTitle?: string,
      tipTitle?: string,
    }
  }
};

type Product = {
  link: string,
  imageLink: string,
  title: string,
  price: string,
  discountPrice?: string,
  reviewsCount?: number,
  rating?: number,
  // rating?: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5,
};
