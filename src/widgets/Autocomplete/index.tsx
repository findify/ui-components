import * as React from 'react';
import { compose, branch, renderComponent, mapProps, renderNothing, setDisplayName } from 'recompose';
import { pick } from 'lodash';
import withConfig from 'helpers/withConfig';

import { AutocompleteBody } from 'internals/AutocompleteBody';
import { AutocompleteMobileBody } from 'internals/AutocompleteMobileBody';

// TODO: should have className `findify-widgets-autocomplete`
// TODO: children of `findify-widgets-autocomplete` should be:
export const Autocomplete = compose(
  setDisplayName('Autocomplete'),
  withConfig({
    currency: 'USD',
    direction: 'ltr',
    i18n: {}
  }),
  branch(
    ({ isMobile }) => !isMobile,
    renderComponent(AutocompleteBody),
    renderComponent(
      branch(
        ({ isMobileSimple }) => isMobileSimple,
        compose(
          mapProps(props => ({
            ...pick(props, ['config', 'meta', 'onSearchSuggestionClick']),
            suggestions: (props as any).suggestions.map((s) => s.value),
          })),
          renderComponent(AutocompleteBody),
        ),
        renderComponent(AutocompleteMobileBody),
      )(AutocompleteMobileBody)
    )
  )
)(renderNothing)
