import * as React from 'react';
import { compose, pure } from 'recompose';
import { unescape } from 'lodash';

import { CheckboxBodyFacet } from 'internals/CheckboxBodyFacet';
import { RangeBodyFacet } from 'internals/RangeBodyFacet';
import { GenericFacet } from 'internals/GenericFacet';
import withConfig from 'helpers/withConfig';

const stateToProps = ({ values, config }) =>
  values.map(value => ({
    ...value,
    key: value.from + '_' + value.to,
    label: `${value.from || unescape(config.i18n.up) } - ${value.to || unescape(config.i18n.under)}`
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
