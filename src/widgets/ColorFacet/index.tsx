import * as React from 'react';
import { compose, withState, withHandlers } from 'recompose';

import { ColorBodyFacet } from 'internals/ColorBodyFacet';
import { createFacet } from 'helpers/createFacet';

export const ColorFacet = createFacet({
  type: 'color',
})(ColorBodyFacet)
