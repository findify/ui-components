import * as React from 'react';

import { RatingWidget } from './RatingWidget';

function AutocompleteWidget({
  searchSuggestions,
  productMatches,
  onSearchSuggestionClick,
  direction,
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
          {searchSuggestions.map((s: Suggestion, i: number) => (
            <span
              key={i}
              className="findify-search-suggestions__item"
              onClick={() => onSearchSuggestionClick(s.query)}
            >
              {s.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const productMatchesNode = (
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
          {productMatches.map((p: ProductMatch, i: number) => (
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
              <div className="findify-product-matches__item-rating">
                <RatingWidget
                  value={p.rating}
                  reviewsCount={p.reviewsCount}
                />
              </div>
              <div className="findify-product-matches__item-price">
                {p.price}
                {p.discountPrice && (
                  <span className="findify-product-matches__item-price-discount">
                    {p.discountPrice}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="findify-autocomplete-widget">
      {direction === 'ltr' ? (
        <div className="findify-autocomplete-widget__body">
          {searchSuggestionsNode}
          {productMatchesNode}
        </div>
      ) : (
        <div className="findify-autocomplete-widget__body">
          {productMatchesNode}
          {searchSuggestionsNode}
        </div>
      )}
      {tipTitle && query && (
        <div className="findify-autocomplete-widget__tip">
          {tipTitle}
          <span className="findify-autocomplete-widget__query">
            {query}
          </span>
        </div>
      )}
    </div>
  );
}

type Props = {
  searchSuggestions: Suggestion[],
  productMatches: ProductMatch[],
  onSearchSuggestionClick: OnSearchSuggestionClick,
  // direction: 'ltr' | 'rtl',
  direction: string,
  suggestionsTitle?: string,
  productMatchesTitle?: string,
  tipTitle?: string,
  query?: string,
};

type Suggestion = {
  title: string,
  query: string,
};

type ProductMatch = {
  link: string,
  imageLink: string,
  title: string,
  price: string,
  discountPrice?: string,
  reviewsCount?: number,
  rating?: number,
  // rating?: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5,
};

type OnSearchSuggestionClick = (query: string) => void

export { AutocompleteWidget };
