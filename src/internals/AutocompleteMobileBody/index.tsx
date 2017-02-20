import * as React from 'react';
import * as cx from 'classnames';

const styles = require('./styles.css');

export function AutocompleteMobileBody({
  query,
  suggestions,
  onSubmit,
  onClearClick,
  onInput,
}: Props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.box}>
        <form
          className={styles.form}
          onSubmit={() => onSubmit(query)}>
          <div className={styles.formLeft}>
            <input
              className={styles.input}
              type="text"
              onChange={(e: any) => onInput(e.target.value)}
              value={query}
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
    </div>
  );
}

function highlightSuggestion(value: string, highlighted: string) {
  const regexp = new RegExp(`(${highlighted})`);
  return value.replace(regexp, `<span class="${styles.highlightedText}">$1</span>`);
}

type Props = {
  query: string,
  suggestions: string[],
  onSubmit: (query: string) => void,
  onInput: (query: string) => void,
  onClearClick: () => void
};
