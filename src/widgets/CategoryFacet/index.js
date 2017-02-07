import * as React from 'react';

import { GenericFacet } from 'widgets/GenericFacet';
import { CategoryBodyFacet } from 'internals/CategoryBodyFacet';

export const CategoryFacet = props => (
  <GenericFacet {...props}>
    <CategoryBodyFacet />
  </GenericFacet>
);
