import * as React from 'react';
import { compose, lifecycle, shouldUpdate, withHandlers, withState } from 'recompose';

import { CategoryBodyFacet } from 'internals/CategoryBodyFacet';
import { GenericFacet } from 'internals/GenericFacet';
import withConfig from 'helpers/withConfig';

export const CategoryFacet = withConfig({
  maxItemsCount: 3,
  rowHeight: 20,
  i18n: {
    goBackTitle: 'All categories',
    search: 'Search',
    more: 'Show more',
    less: 'Less',
  }
})(props => (
  <GenericFacet {...props} >
    <CategoryBodyFacet />
  </GenericFacet>
));
