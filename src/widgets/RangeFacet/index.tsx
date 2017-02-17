import * as React from 'react';
import { compose, withState, withHandlers, defaultProps } from 'recompose';

import { CheckboxBodyFacet } from 'internals/CheckboxBodyFacet';
import { RangeBodyFacet } from 'internals/RangeBodyFacet';
import { valueToKey } from 'helpers/valueToKey';
const { GenericFacet } = require('internals/GenericFacet');

const mapper = (list, key, value) =>
  list.some(item => item.key === key)
  ? [...list.map(item => item.key === key ? {...item, selected: value } : item)]
  : [...list, value];

const stateToProps = props =>
  props.values.map(value => ({
    ...value,
    key: [value.from, value.to].join('_'),
    label: valueToKey(value, 'USD')
  }));

export const RangeFacet = compose(
  defaultProps({
    currency: 'USD',
    i18n: {
      submit: 'go'
    }
  }),
)(props => (
  <GenericFacet {...props} mapper={mapper} stateToProps={stateToProps}>
    <CheckboxBodyFacet />
    <RangeBodyFacet />
  </GenericFacet>
));
