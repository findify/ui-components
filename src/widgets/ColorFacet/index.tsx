import * as React from 'react';
import { compose, withState, withHandlers } from 'recompose';

import { GenericFacet } from 'widgets/GenericFacet';
import { ColorBodyFacet } from 'internals/ColorBodyFacet';

export const ColorFacet = compose(
  withState('list', 'updateList', props => props.values),
  withHandlers({
    onChange: ({ list, updateList, onChange }) => (key, selected) => updateList(
      [...list.map(item => item.key === key ? {...item, selected } : item)],
      () => onChange && onChange(key, selected)
    )
  })
)(props => (
  <GenericFacet {...props}>
    <ColorBodyFacet />
  </GenericFacet>
));
