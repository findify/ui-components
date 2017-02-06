import * as React from 'react';
import * as cx from 'classnames';

import { SearchSuggestions } from 'internals/SearchSuggestions';
import { ProductMatches } from 'internals/ProductMatches';

import * as styles from './styles.css';

function AutocompleteWidget({
  direction = 'ltr',
  searchSuggestions,
  productMatches,
  productMatchesTitle,
  onSearchSuggestionClick,
  onTipClick,
  suggestionsTitle,
  tipTitle,
  query,
}: Props) {
  const searchSuggestionsNode = (
    <SearchSuggestions {...{
      searchSuggestions,
      suggestionsTitle,
      onSearchSuggestionClick,
      query 
      }} />
  ); 

  const productMatchesNode = productMatches && productMatches.length && (
    <ProductMatches {...{
      productMatches,
      productMatchesTitle
    }} />
  );
  
  return (
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
        tipTitle && (
          <div
            className={styles.tip}
            onClick={() => onTipClick && onTipClick()} >
            {tipTitle}
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
  searchSuggestions: string[],
  onSearchSuggestionClick: (query: string) => void,
  productMatches?: Product[],
  onTipClick?: () => void,
  // direction: 'ltr' | 'rtl',
  direction?: string,
  suggestionsTitle?: string,
  productMatchesTitle?: string,
  tipTitle?: string,
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

export { AutocompleteWidget };
