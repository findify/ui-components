import * as React from 'react';
import { compose, lifecycle, shouldUpdate, withHandlers, withState } from 'recompose';

import { CategoryBodyFacet } from 'internals/CategoryBodyFacet';

const { GenericFacet } = require('internals/GenericFacet');

const mapper = (list, key, selected) => [
  ...list.map(item =>
    item.key === key
    ? {...item, selected }
    : item.children
      ? {...item, children: mapper(item.children, key, selected)}
      : item
  )
]

export const CategoryFacet = props => (
  <GenericFacet {...props} mapper={mapper} >
    <CategoryBodyFacet />
  </GenericFacet>
);
