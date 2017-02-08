import * as React from 'react';
import { compose, withState, withHandlers, defaultProps } from 'recompose';

import { GenericFacet } from 'widgets/GenericFacet';
import { CheckboxBodyFacet } from 'internals/CheckboxBodyFacet';
import { RangeBodyFacet } from 'internals/RangeBodyFacet';

const valueToKey = ({ from, to }, currency) =>
  from && to && `${from} ${currency} - ${to} ${currency}` ||
  from && !to && `${from} ${currency} and more` ||
  !from && to && `less then ${to} ${currency}`;

export const RangeFacet = compose(
  defaultProps({
    currency: 'USD',
    i18n: {
      submit: 'go'
    }
  }),

  withState('list', 'updateList', props =>
    props.values.map(value => ({...value, key: valueToKey(value, props.currency) }))
  ),

  withHandlers({
    onChange: ({ list, updateList, onChange }) => (key, selected) => updateList(
      [...list.map(item => item.key === key ? {...item, selected } : item)],
      () => onChange && onChange(list.find(item => item.key === key), selected)
    )
  }),

  withHandlers({
    addRange: ({ list, updateList, onChange, currency }) => (from, to) => {
      if (!from && !to) return;

      const key = valueToKey({ from, to }, currency);
      if (list.find(item => item.key === key)) return;

      return updateList(
        [...list, { selected: true, from, to, key }],
        () => onChange && onChange({ from, to }, true)
      )
    }
  })
)(props => (
  <GenericFacet {...props}>
    <CheckboxBodyFacet />
    <RangeBodyFacet />
  </GenericFacet>
));
