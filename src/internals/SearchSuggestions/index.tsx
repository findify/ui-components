import * as React from 'react';

const styles = require('./styles.css');

type Props = {
  query: string,
  suggestions: string[],
  onSearchSuggestionClick: (query: string) => void,
  title?: string
};

export const SearchSuggestions = ({
  title,
  suggestions,
  onSearchSuggestionClick,
  query
}: Props) => (
  <div className={styles.wrap}>
    {
      title && (
        <div className={styles.title}>
          <span className={styles.autocompleteTitle}>
            { title }
          </span>
        </div>
      )
    }
    <div className={styles.list}>
      {
        suggestions.map((suggestion: string, i: number) => (
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
