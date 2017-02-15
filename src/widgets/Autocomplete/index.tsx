import * as React from 'react';
import { compose, branch, renderComponent, mapProps, renderNothing, setDisplayName } from 'recompose';
import { pick } from 'lodash';

import { AutocompleteBody } from 'internals/AutocompleteBody';
import { AutocompleteMobileBody } from 'internals/AutocompleteMobileBody';

export const Autocomplete = compose(
  setDisplayName('Autocomplete'),
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
