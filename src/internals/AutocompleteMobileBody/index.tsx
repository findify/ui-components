import * as React from 'react';
import * as cx from 'classnames';

const styles = require('./styles.css');

export function AutocompleteMobileBody({
  meta: {
    q: query
  },
  suggestions,
  onSubmit,
  onClearClick,
  onInput,
}: Props) {
  return (
    <div className={styles.wrap}>
      <form
        className={styles.form}
        onSubmit={(e) => onSubmit(query, e)}>
        <div className={styles.formLeft}>
          <input
            className={styles.input}
            type="text"
            onChange={(e: any) => onInput(e.target.value)}
            value={query}
            ref={r => r && r.focus()}
          />
          <a
            className={cx(styles.clear, 'fa', 'fa-times-circle')}
            onClick={() => onClearClick()}
          />
        </div>
        <div className={styles.formRight}>
          <button
            className={cx(styles.submit, 'fa', 'fa-search')}
            type="submit"
          />
        </div>
      </form>
      <div className={styles.suggestions}>
        {
          suggestions.map((suggestion: string, i: number) =>
            <span
              key={i}
              className={styles.suggestionsItem}
              onClick={() => onSubmit(suggestion)}
              dangerouslySetInnerHTML={{
                __html: highlightSuggestion(suggestion, query),
              }}
            />
          )
        }
      </div>
    </div>
  );
}

function highlightSuggestion(value: string, highlighted: string) {
  const regexp = new RegExp(`(${highlighted})`);
  return value.replace(regexp, `<span class="${styles.highlightedText}">$1</span>`);
}

type Props = {
  meta: {
    q: string
  },
  suggestions: string[],
  onSubmit: (query: string, event?: object) => void,
  onInput: (query: string) => void,
  onClearClick: () => void
};
