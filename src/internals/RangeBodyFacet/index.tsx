import * as React from 'react';
import { compose, withState, withHandlers, mapProps } from 'recompose';
import NumberInput from 'react-number-input';

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
    updateMin: ({ setMin }) => e => setMin(parseInt(e.target.value)),
    updateMax: ({ setMax }) => e => setMax(parseInt(e.target.value)),
    onCommit: ({ addRange, minValue, maxValue, setMin, setMax }) => () => {
      setMin(void 0);
      setMax(void 0);
      return addRange(minValue, maxValue)
    }
  })
)(({
  minValue,
  maxValue,
  updateMin,
  updateMax,
  onCommit,
  currency,
  max,
  min,
  i18n
}: any) =>
  <div className={styles.wrap}>
    <div className={styles.inputWrap}>
      <NumberInput className={styles.input} value={minValue} min={min} max={maxValue} onChange={updateMin}/>
      <span className={styles.currency}>{currency}</span>
    </div>
    <div className={styles.separator}>-</div>
    <div className={styles.inputWrap}>
      <NumberInput className={styles.input} value={maxValue} min={minValue} max={max} onChange={updateMax}/>
      <span className={styles.currency}>{currency}</span>
    </div>
    <div className={styles.commitWrap}>
      <button className={styles.button} onClick={onCommit}>{i18n.submit}</button>
    </div>
  </div>
);
