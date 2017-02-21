import * as React from 'react';
import { compose, withState, withHandlers } from 'recompose';

import { ColorBodyFacet } from 'internals/ColorBodyFacet';
const { GenericFacet } = require('internals/GenericFacet');

export const ColorFacet = props => (
  <GenericFacet {...props}>
    <ColorBodyFacet />
  </GenericFacet>
);
