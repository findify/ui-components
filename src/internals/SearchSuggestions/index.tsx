import * as React from 'react';
import * as cx from 'classnames';

const styles = require('./styles.css');

type Props = {
  query: string,
  suggestions: string[],
  selectedSuggestion?: number,
  onSearchSuggestionClick: (query: string) => void,
  title?: string
};

export const SearchSuggestions = ({
  title,
  suggestions,
  selectedSuggestion,
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
            className={cx(styles.item, selectedSuggestion === i && styles.selected)}
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
