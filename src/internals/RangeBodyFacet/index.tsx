import * as React from 'react';
import { compose, withState, withHandlers, mapProps, withPropsOnChange } from 'recompose';
import NumberInput from 'react-numeric-input';
import formatRange from 'helpers/formatRange';
import { findCurrency } from 'currency-formatter'
import { getRangeFacetKey } from 'helpers/getRangeFacetKey';

const styles = require('./styles.css');

export const RangeBodyFacet = compose(
  mapProps(({ min, max, ...rest }) => ({
    ...rest,
    min: parseInt(min),
    max: parseInt(max),
  })),
  withPropsOnChange(['config'], ({ config }) =>({
    currencySymbol: <span className={styles.currency}>{findCurrency(config.currency.code).symbol}</span>
  })),
  withState('minValue', 'setMinValue', props => props.min),
  withState('maxValue', 'setMaxValue', props => props.max),
  withState('min', 'setMin', void 0),
  withState('max', 'setMax', void 0),
  withHandlers({
    onCommit: ({ name, values, onChange, minValue: from, maxValue: to, setMin, setMax, config }) =>
    () => {
      if (!from && !to) return;
      const label = formatRange({ from, to, config });
      const key = getRangeFacetKey({ from, to });
      if (values.find(item => item.key === key)) return;
      onChange({ selected: true, from, to, key, label, name });
      setMin(void 0);
      setMax(void 0);
    },
    updateMin: ({ setMinValue, setMin, min, maxValue }) => (_, value) => {
      const val = parseInt(value) || min;
      const normalizedValue = val > maxValue ? maxValue : val
      setMin(normalizedValue)
      return setMinValue(normalizedValue)
    },
    updateMax: ({ setMaxValue, setMax, max, minValue }) => (_, value) => {
      const val = parseInt(value) || max;
      const normalizedValue = val < minValue ? minValue : val;
      setMax(normalizedValue)
      return setMaxValue(normalizedValue);
    },
  })
)(({
  minValue,
  maxValue,
  updateMin,
  updateMax,
  onCommit,
  config: {
    currency,
    i18n
  },
  currencySymbol,
  max,
  min,
}: any) => (
  <div className={styles.wrap}>
    <div className={styles.inputWrap}>
      { 
        !!currency.symbolOnLeft && currencySymbol
      }
      <NumberInput
        style={false}
        className={styles.input}
        value={min}
        min={0}
        max={maxValue}
        onChange={updateMin} />
      { 
        !currency.symbolOnLeft && currencySymbol
      }
    </div>
    <div className={styles.separator}>-</div>
    <div className={styles.inputWrap}>
      { 
        !!currency.symbolOnLeft && currencySymbol
      }
      <NumberInput
        style={false}
        className={styles.input}
        value={max}
        min={minValue}
        onChange={updateMax} />
      { 
        !currency.symbolOnLeft && currencySymbol
      }
    </div>
    <div className={styles.commitWrap}>
      <button className={styles.button} onClick={onCommit}>{i18n.submit}</button>
    </div>
  </div>
));
