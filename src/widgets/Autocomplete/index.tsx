import * as React from 'react';
import { compose, branch, renderComponent, mapProps, renderNothing, setDisplayName, defaultProps } from 'recompose';
import { pick } from 'lodash';
import withConfig from 'helpers/withConfig';
import provideLocation from 'helpers/provideLocation';

import { AutocompleteBody } from 'internals/AutocompleteBody';
import { AutocompleteMobileBody } from 'internals/AutocompleteMobileBody';

// TODO: should have className `findify-widgets-autocomplete`
// TODO: children of `findify-widgets-autocomplete` should be:
export const Autocomplete: any = compose(
  setDisplayName('Autocomplete'),
  provideLocation,
  withConfig({
    currency: 'USD',
    position: 'left',
    i18n: {}
  }),
  defaultProps({
    meta: {},
    suggestion: [],
    items: []
  }),
  mapProps(({ suggestions = [], ...props }) => ({
    ...props,
    suggestions: (suggestions as any).map((s) => s.value),
  })),
  branch(
    ({ isMobile }) => !isMobile,
    renderComponent(AutocompleteBody),
    renderComponent(
      branch(
        ({ isMobileSimple }) => isMobileSimple,
        compose(
          mapProps(props => pick(props, ['config', 'onTipClick', 'meta', 'suggestions', 'onSearchSuggestionClick'])),
          renderComponent(AutocompleteBody),
        ),
        renderComponent(AutocompleteMobileBody),
      )(AutocompleteMobileBody)
    )
  )
)(renderNothing)
