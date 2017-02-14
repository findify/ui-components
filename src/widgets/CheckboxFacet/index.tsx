import * as React from 'react';
import { compose, withState, withHandlers } from 'recompose';

const { CheckboxBodyFacet } = require('internals/CheckboxBodyFacet');
const { GenericFacet } = require('widgets/GenericFacet');

const mapper = (list, key, selected) => 
  [...list.map(item => item.key === key ? {...item, selected } : item)]

export const CheckboxFacet = props => (
  <GenericFacet {...props} mapper={mapper}>
    <CheckboxBodyFacet showExpander />
  </GenericFacet>
);
