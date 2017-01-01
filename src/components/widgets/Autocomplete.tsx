import * as React from 'react';

import { Rating } from './Rating';

function Autocomplete({
  searchSuggestions,
  productMatches,
  onSuggestionClick,
  onProductClick,
  direction,
  suggestionsTitle,
  productMatchesTitle,
  tipTitle,
  query,
}: Props) {
  const searchSuggestionsNode = (
    <div className="findify-autocomplete__search-suggestions">
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
              onClick={() => onSuggestionClick(s.query)}
            >
              {s.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const productMatchesNode = (
    <div className="findify-autocomplete__product-matches">
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
                <Rating
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
    <div className="findify-autocomplete">
      {direction === 'ltr' ? (
        <div className="findify-autocomplete__body">
          {searchSuggestionsNode}
          {productMatchesNode}
        </div>
      ) : (
        <div className="findify-autocomplete__body">
          {productMatchesNode}
          {searchSuggestionsNode}
        </div>
      )}
      {tipTitle && query && (
        <div className="findify-autocomplete__tip">
          {tipTitle}
          <span className="findify-autocomplete__query">
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
  onSuggestionClick: OnSuggestionClick,
  onProductClick: OnProductMatchClick,
  direction: 'ltr' | 'rtl',
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
  reviewsCount?: string,
  rating?: 1 | 2 | 3 | 4 | 5,
};

type OnSuggestionClick = (query: string) => void

type OnProductMatchClick = (id: number) => void

export { Autocomplete };
