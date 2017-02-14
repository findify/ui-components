import * as React from 'react';
import { compose, withState, withHandlers } from 'recompose';

import { ColorBodyFacet } from 'internals/ColorBodyFacet';
const { GenericFacet } = require('widgets/GenericFacet');

const mapper = (list, key, selected) => 
  [...list.map(item => item.key === key ? {...item, selected } : item)]

export const ColorFacet = props => (
  <GenericFacet {...props} mapper={mapper}>
    <ColorBodyFacet />
  </GenericFacet>
);
