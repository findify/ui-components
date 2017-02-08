import * as React from 'react';
import { compose, withState, withHandlers } from 'recompose';

import { GenericFacet } from 'widgets/GenericFacet';
import { CategoryBodyFacet } from 'internals/CategoryBodyFacet';

const reduceItems = (list, key, selected) => [
  ...list.map(item =>
    item.key === key
    ? {...item, selected }
    : item.children
      ? {...item, children: reduceItems(item.children, key, selected)}
      : item
  )
]

export const CategoryFacet = compose(
  withState('list', 'updateList', props => props.values),
  withHandlers({
    onChange: ({ list, updateList, onChange }) => (key, selected) => updateList(
      reduceItems(list, key, selected),
      () => onChange && onChange(key, selected)
    )
  })
)(props => (
  <GenericFacet {...props}>
    <CategoryBodyFacet />
  </GenericFacet>
));
