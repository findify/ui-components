import * as React from 'react';
import { compose, withState, withHandlers, mapProps } from 'recompose';
import NumberInput from 'react-number-input';
import { valueToKey } from 'helpers/valueToKey';
import { getRangeFacetKey } from 'helpers/getRangeFacetKey';

const styles = require('./styles.css');

export const RangeBodyFacet = compose(
  mapProps(({ min, max, ...rest }) => ({
    ...rest,
    min: parseInt(min),
    max: parseInt(max),
  })),
  withState('minValue', 'setMin', props => props.min),
  withState('maxValue', 'setMax', props => props.max),
  withHandlers({
    onCommit: ({ name, values, onChange, minValue: from, maxValue: to, setMin, setMax, config }) =>
    () => {
      if (!from && !to) return;
      const label = valueToKey({ from, to }, config.currency);
      const key = getRangeFacetKey({ from, to });
      if (values.find(item => item.key === key)) return;
      onChange({ selected: true, from, to, key, label, name });
      setMin(void 0);
      setMax(void 0);
    },
    updateMin: ({ setMin }) => value => setMin(value),
    updateMax: ({ setMax }) => value => setMax(value),
  })
)(({
  minValue,
  maxValue,
  updateMin,
  updateMax,
  onCommit,
  config,
  max,
  min,
  i18n
}: any) =>
  <div className={styles.wrap}>
    <div className={styles.inputWrap}>
      <NumberInput className={styles.input} value={minValue} min={min} max={maxValue} onChange={updateMin}/>
      <span className={styles.currency}>{config.currency}</span>
    </div>
    <div className={styles.separator}>-</div>
    <div className={styles.inputWrap}>
      <NumberInput className={styles.input} value={maxValue} min={minValue} max={max} onChange={updateMax}/>
      <span className={styles.currency}>{config.currency}</span>
    </div>
    <div className={styles.commitWrap}>
      <button className={styles.button} onClick={onCommit}>{config.i18n.submit}</button>
    </div>
  </div>
);
