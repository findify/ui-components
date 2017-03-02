import * as React from 'react';
import { compose, withState, withHandlers } from 'recompose';

import { CheckboxBodyFacet } from 'internals/CheckboxBodyFacet';
import { RangeBodyFacet } from 'internals/RangeBodyFacet';
import { valueToKey } from 'helpers/valueToKey';
import { GenericFacet } from 'internals/GenericFacet';
import withConfig from 'helpers/withConfig';

const stateToProps = props =>
  props.values.map(value => ({
    ...value,
    key: [value.from, value.to].join('_'),
    label: valueToKey(value, props.config.currency)
  }));

export const RangeFacet: any = compose(
  withConfig({
    currency: 'USD',
    i18n: {
      submit: 'go'
    }
  }),
)(props => (
  <GenericFacet {...props} stateToProps={stateToProps}>
    <CheckboxBodyFacet />
    <RangeBodyFacet />
  </GenericFacet>
));
