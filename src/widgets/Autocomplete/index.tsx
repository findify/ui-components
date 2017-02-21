import * as React from 'react';
import { compose, branch, renderComponent, mapProps, renderNothing, setDisplayName } from 'recompose';
import { pick, merge } from 'lodash';

import { AutocompleteBody } from 'internals/AutocompleteBody';
import { AutocompleteMobileBody } from 'internals/AutocompleteMobileBody';

// TODO: should have className `findify-widgets-autocomplete`
// TODO: children of `findify-widgets-autocomplete` should be:
export const Autocomplete = compose(
  setDisplayName('Autocomplete'),
  mapProps((props: any) => ({
    ...props,
    config: merge({}, {
      direction: 'ltr',
      i18n: {},
    }, props.config),
  })),
  branch(
    ({ isMobile }) => !isMobile,
    renderComponent(AutocompleteBody),
    renderComponent(
      branch(
        ({ isMobileSimple }) => isMobileSimple,
        compose(
          mapProps(props => pick(props, ['i18n', 'suggestions', 'query', 'onSearchSuggestionClick'])),
          renderComponent(AutocompleteBody),
        ),
        renderComponent(AutocompleteMobileBody),
      )(AutocompleteMobileBody)
    )
  )
)(renderNothing)
