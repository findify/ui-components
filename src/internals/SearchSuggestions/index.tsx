import * as React from 'react';

import * as styles from './styles.css';

type Props = {
  query: string,
  searchSuggestions: string[],
  onSearchSuggestionClick: (query: string) => void,
  suggestionsTitle?: string
};

export const SearchSuggestions = ({
  suggestionsTitle,
  searchSuggestions,
  onSearchSuggestionClick,
  query
}: Props) => (
  <div className={styles.wrap}>
    {
      suggestionsTitle && (
        <div className={styles.title}>
          <span className={styles.autocompleteTitle}>
            { suggestionsTitle }
          </span>
        </div>
      )
    }
    <div className={styles.list}>
      {
        searchSuggestions.map((suggestion: string, i: number) => (
          <span
            key={i}
            className={styles.item}
            onClick={() => onSearchSuggestionClick(suggestion)}
            dangerouslySetInnerHTML={{
              __html: highlightSuggestion(suggestion, query),
            }}/>
        ))
      }
    </div>
  </div>
);

function highlightSuggestion(value: string, highlighted: string) {
  const regexp = new RegExp(`(${highlighted})`);
  return value.replace(regexp, `<span class="${styles.highlightedText}">$1</span>`);
}
