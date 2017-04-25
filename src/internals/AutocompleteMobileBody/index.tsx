import * as React from 'react';
import * as cx from 'classnames';
import { compose, withState, withHandlers, createEagerElement } from 'recompose';

const styles = require('./styles.css');

const Suggestion: any = withHandlers({
  handleClick: ({ suggestion, onClick }) => e => {
    e.preventDefault();
    return onClick(suggestion);
  }
})(({ handleClick, suggestion, query }:any) => (
  <span
    className={styles.suggestionsItem}
    onClick={handleClick}
    dangerouslySetInnerHTML={{
      __html: highlightSuggestion(suggestion.value, query),
    }}
  />
));

export const AutocompleteMobileBody = compose(
  withState('query', 'setQuery', props => props.query),
  withHandlers({
    onChange: ({ onInput, setQuery }) => e => {
      e.preventDefault();
      setQuery(e.target.value);
      return onInput(e.target.value);
    },
    onSubmit: ({ onSubmit, query }) => e => {
      e.preventDefault();
      return onSubmit(query);
    },
    onSelect: ({ onSubmit }) => (suggestion) => onSubmit(suggestion)
  })
)(({
  query,
  suggestions,
  onSubmit,
  onClearClick,
  onInput,
  onChange,
  onSelect
}: Props) => (
  <div className={styles.wrap}>
    <form
      className={styles.form}
      onSubmit={onSubmit}>
      <div className={styles.formLeft}>
        <input
          className={styles.input}
          type="text"
          onChange={onChange}
          defaultValue={query}
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
        !!suggestions && suggestions.map((suggestion: any) =>
          createEagerElement(Suggestion,
            {
              key: suggestion.value,
              onClick: onSelect,
              suggestion,
              query
            }
          )
        )
      }
    </div>
  </div>
))

function highlightSuggestion(value: string, highlighted: string) {
  const regexp = new RegExp(`(${highlighted})`);
  return value.replace(regexp, `<span class="${styles.highlightedText}">$1</span>`);
}

type Props = {
  query: string,
  suggestions: string[],
  onSubmit: (event?: object) => void,
  onInput: (query: string) => void,
  onClearClick: () => void,
  onChange,
  onSelect
};
