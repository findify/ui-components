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
          <span className="findify-search-suggestions__title">
            {suggestionsTitle}
          </span>
        )}
        <div className="findify-search-suggestions__list">
          {searchSuggestions.map((s: Suggestion, i: number) => (
            <span
              key={i}
              className="findify-search-suggestions__suggestion"
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
          <span className="findify-product-matches__title">
            {productMatchesTitle}
          </span>
        )}
        <div className="findify-product-matches">
          {productMatches.map((p: ProductMatch, i: number) => (
            <a
              className="findify-product-matches__item"
              href={p.link}
              key={i}
            >
              <div className="findify-product-matches__image">
                <img
                  className="findify-product-matches__image-link"
                  src={p.imageLink}
                />
              </div>
              <span className="findify-product-matches__title">
                {p.title}
              </span>
              <div className="findify-product-matches__rating">
                <RatingWidget
                  value={p.rating}
                  reviewsCount={p.reviewsCount}
                />
              </div>
              <div className="findify-product-matches__price">
                {p.price}
                {p.discountPrice && (
                  <div className="findify-product-matches__price-discount">
                    {p.discountPrice}
                  </div>
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
  price: number,
  discountPrice?: number,
  reviewsCount?: number,
  rating?: number,
  // rating?: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5,
};

type OnSearchSuggestionClick = (query: string) => void

export { AutocompleteWidget };
