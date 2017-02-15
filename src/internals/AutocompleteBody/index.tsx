import * as React from 'react';
import * as cx from 'classnames';

import { SearchSuggestions } from 'internals/SearchSuggestions';
import { ProductMatches } from 'internals/ProductMatches';

const styles = require('./styles.css');

export function AutocompleteBody({
  direction = 'ltr',
  suggestions,
  products,
  onSearchSuggestionClick,
  onTipClick,
  query,
  i18n
}: Props) {
  const searchSuggestionsNode = (
    <SearchSuggestions {...{
      suggestions,
      title: i18n.suggestionsTitle,
      onSearchSuggestionClick,
      query 
      }} />
  ); 

  const productMatchesNode = products && products.length && (
    <ProductMatches {...{
      products,
      title: i18n.productMatchesTitle
    }} />
  );

  return (
    // TODO: Missing block name. It's related to all components
    <div className={cx(styles.root, styles[direction])}>
      {
        direction === 'rtl'
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
            {i18n.tipTitle}
            <span className={styles.tipQuery}>
              &nbsp;"{query}"
            </span>
          </div>
        )
      }
    </div>
  );
};

type Props = {
  query: string,
  suggestions: string[],
  onSearchSuggestionClick: (query: string) => void,
  products?: Product[],
  onTipClick?: () => void,
  // direction: 'ltr' | 'rtl',
  direction?: string,
  i18n: {
    suggestionsTitle?: string,
    productMatchesTitle?: string,
    tipTitle?: string,
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
