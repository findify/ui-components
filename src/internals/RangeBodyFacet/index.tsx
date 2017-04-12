import * as React from 'react';
import { compose, withState, withHandlers, mapProps } from 'recompose';
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
    currencySymbol: findCurrency(rest.config.currency.code).symbol
  })),
  withState('minValue', 'setMin', props => props.min),
  withState('maxValue', 'setMax', props => props.max),
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
    updateMin: ({ setMin, min, maxValue }) => (_, value) => {
      const val = parseInt(value) || min;
      return setMin(val > maxValue ? maxValue : val)
    },
    updateMax: ({ setMax, max, minValue }) => (_, value) => {
      const val = parseInt(value) || max;
      return setMax(val < minValue ? minValue : val);
    },
  })
)(({
  minValue,
  maxValue,
  updateMin,
  updateMax,
  onCommit,
  config,
  currencySymbol,
  max,
  min,
  i18n
}: any) => (
  <div className={styles.wrap}>
    <div className={styles.inputWrap}>
      <NumberInput
        style={false}
        className={styles.input}
        placeholder={minValue}
        min={0}
        max={maxValue}
        onChange={updateMin} />
      <span className={styles.currency}>{currencySymbol}</span>
    </div>
    <div className={styles.separator}>-</div>
    <div className={styles.inputWrap}>
      <NumberInput
        style={false}
        className={styles.input}
        placeholder={maxValue}
        min={minValue}
        onChange={updateMax} />
      <span className={styles.currency}>{currencySymbol}</span>
    </div>
    <div className={styles.commitWrap}>
      <button className={styles.button} onClick={onCommit}>{config.i18n.submit}</button>
    </div>
  </div>
));
