import * as React from 'react';
import { compose, pure } from 'recompose';

import { CheckboxBodyFacet } from 'internals/CheckboxBodyFacet';
import { RangeBodyFacet } from 'internals/RangeBodyFacet';
import formatRange from 'helpers/formatRange';
import { GenericFacet } from 'internals/GenericFacet';
import withConfig from 'helpers/withConfig';

const stateToProps = ({ values, config }) =>
  values.map(value => ({
    ...value,
    key: value.from + '_' + value.to,
    label: formatRange({ from: value.from, to: value.to, config })
  }));

export const RangeFacet: any = compose(
  pure,
  withConfig({
    maxItemsCount: 6,
    rowHeight: 20,
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
