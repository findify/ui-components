import * as React from 'react';

function AutocompleteMobileWidget({
  query,
  searchSuggestions,
  onSubmit,
  onClearClick,
  onInput,
}: Props) {
  return (
    <div className="findify-autocomplete-mobile-widget">
      <div className="findify-autocomplete-mobile-widget__box">
        <form
          className="findify-autocomplete-mobile-widget__form"
          onSubmit={() => onSubmit(query)}
        >
          <div className="findify-autocomplete-mobile-widget__form-left">
            <input
              className="findify-autocomplete-mobile-widget__input"
              type="text"
              onChange={(e: any) => onInput(e.target.value)}
              value={query}
            />
            <a
              className="findify-autocomplete-mobile-widget__clear fa fa-times-circle"
              onClick={() => onClearClick()}
            />
          </div>
          <div className="findify-autocomplete-mobile-widget__form-right">
            <button
              className="findify-autocomplete-mobile-widget__submit fa fa-search"
              type="submit"
            />
          </div>
        </form>
        <div
          className="findify-autocomplete-mobile-widget__suggestions"
        >
          {searchSuggestions.map((suggestion: string, i: number) => (
            <span
              key={i}
              className="findify-autocomplete-mobile-widget__suggestions-item"
              onClick={() => onSubmit(suggestion)}
              dangerouslySetInnerHTML={{
                __html: highlightSuggestion(suggestion, query),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function highlightSuggestion(value: string, higlighted: string) {
  const regexp = new RegExp(`(${higlighted})`);
  return value.replace(regexp, '<span class="findify-autocomplete-mobile-widget__highlighted-text">$1</span>');
}

type Props = {
  query: string,
  searchSuggestions: string[],
  onSubmit: (query: string) => void,
  onInput: (query: string) => void,
  onClearClick: () => void,
};

export { AutocompleteMobileWidget }
