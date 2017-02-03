import * as React from 'react';
import * as cx from 'classnames';

import { RatingWidget } from 'widgets/Rating';

import * as styles from './styles.css';

function AutocompleteWidget({
  direction = 'ltr',
  searchSuggestions,
  productMatches,
  onSearchSuggestionClick,
  onTipClick,
  suggestionsTitle,
  productMatchesTitle,
  tipTitle,
  query,
}: Props) {
  const searchSuggestionsNode = (
    <div className="findify-autocomplete-widget__search-suggestions">
      <div className="findify-search-suggestions">
        {suggestionsTitle && (
          <div className="findify-search-suggestions__title">
            <span className="findify-autocomplete-title">
              {suggestionsTitle}
            </span>
          </div>
        )}
        <div className="findify-search-suggestions__list">
          {searchSuggestions.map((suggestion: string, i: number) => (
            <span
              key={i}
              className="findify-search-suggestions__item"
              onClick={() => onSearchSuggestionClick(suggestion)}
              dangerouslySetInnerHTML={{
                __html: highlightSuggestion(suggestion, query),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const productMatchesNode = productMatches && productMatches.length && (
    <div className="findify-autocomplete-widget__product-matches">
      <div className="findify-product-matches">
        {productMatchesTitle && (
          <div className="findify-product-matches__title">
            <span className="findify-autocomplete-title">
              {productMatchesTitle}
            </span>
          </div>
        )}
        <div className="findify-product-matches__items">
          {productMatches.map((p: Product, i: number) => (
            <a
              className="findify-product-matches__item"
              href={p.link}
              key={i}
            >
              <div className="findify-product-matches__item-image">
                <img
                  className="findify-product-matches__item-src"
                  src={p.imageLink}
                />
              </div>
              <span className="findify-product-matches__item-title">
                {p.title}
              </span>
              {p.rating && (
                <div className="findify-product-matches__item-rating">
                  <RatingWidget
                    value={p.rating}
                    reviewsCount={p.reviewsCount}
                  />
                </div>
              )}
              <div className="findify-product-matches__item-price">
                {p.discountPrice && (
                  <span className="findify-product-matches__item-price-discount">
                    {p.discountPrice}
                  </span>
                )}
                <span className="findify-product-matches__item-price-regular">
                  {p.price}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
  
  return (
    <div className={cx(styles.root, styles[direction])}>
      {
        direction === 'rtl'
        &&
        <div className={styles.container}>
          {productMatchesNode}
          {searchSuggestionsNode}
        </div>
        ||
        <div className={styles.container}>
          {searchSuggestionsNode}
          {productMatchesNode}
        </div>
      }
      {
        tipTitle &&
        <div
          className={styles.tip}
          onClick={() => onTipClick && onTipClick()} >
          {tipTitle}
          <span className={styles.tipQuery}>
            &nbsp;"{query}"
          </span>
        </div>
      }
    </div>
  );
}

function highlightSuggestion(value: string, highlighted: string) {
  const regexp = new RegExp(`(${highlighted})`);
  return value.replace(regexp, '<span class="findify-search-suggestions__highlighted-text">$1</span>');
}

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
