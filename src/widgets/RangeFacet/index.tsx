import * as React from 'react';
import { compose, withState, withHandlers, defaultProps } from 'recompose';

import { CheckboxBodyFacet } from 'internals/CheckboxBodyFacet';
import { RangeBodyFacet } from 'internals/RangeBodyFacet';
import { valueToKey } from 'helpers/valueToKey';
const { GenericFacet } = require('internals/GenericFacet');

const stateToProps = props =>
  props.values.map(value => ({
    ...value,
    key: [value.from, value.to].join('_'),
    label: valueToKey(value, props.config.currency)
  }));

export const RangeFacet = compose(
  defaultProps({
    config: {
      cong: 'USD',
      i18n: {
        submit: 'go'
      }
    }
  }),
)(props => (
  <GenericFacet {...props} stateToProps={stateToProps}>
    <CheckboxBodyFacet />
    <RangeBodyFacet />
  </GenericFacet>
));
