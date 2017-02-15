import * as React from 'react';
import { compose, lifecycle, shouldUpdate, withHandlers, withState } from 'recompose';
import { createFacet } from 'helpers/createFacet';
import { CategoryBodyFacet } from 'internals/CategoryBodyFacet';
import { RangeBodyFacet } from 'internals/RangeBodyFacet';
import { ColorBodyFacet } from 'internals/ColorBodyFacet';


// const { GenericFacet } = require('widgets/GenericFacet');

// const mapper = (list, key, selected) => [
//   ...list.map(item =>
//     item.key === key
//     ? {...item, selected }
//     : item.children
//       ? {...item, children: mapper(item.children, key, selected)}
//       : item
//   )
// ]

export const CategoryFacet = createFacet({
  type: 'terms'
})(CategoryBodyFacet)
