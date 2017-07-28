import * as React from 'react';
import { compose, withState, withHandlers, mapProps, withPropsOnChange, defaultProps } from 'recompose';
import NumberInput from 'internals/NumberInput';
import formatRange from 'helpers/formatRange';
import { findCurrency } from 'currency-formatter'
import { getRangeFacetKey } from 'helpers/getRangeFacetKey';
import * as cx from 'classnames';

const styles = require('./styles.css');

export const RangeBodyFacet: any = compose(
  defaultProps({
    useCurrency: false
  }),

  mapProps(({ min, max, ...rest }) => ({
    ...rest,
    initialMin: parseInt(min),
    initialMax: parseInt(max),
  })),

  withPropsOnChange(['config'], ({ config }) => {
    const currency = findCurrency(config.currency.code);
    const symbolOnLeft = config.currency.symbolOnLeft || currency.symbolOnLeft;
    return {
      symbolOnLeft,
      currencySymbol: (
        <span className={cx(styles.currency, symbolOnLeft && styles.pullRight)}>
          { config.currency.symbol || currency.symbol }
        </span>
      )
    }
  }),

  withState('minValue', 'setMinValue', props => props.initialMin),
  withState('maxValue', 'setMaxValue', props => props.initialMax),
  withState('min', 'setMin', void 0),
  withState('max', 'setMax', void 0),

  withHandlers({
    onCommit: ({ name, values, onChange, minValue: from, maxValue: to, setMin, setMax, config }) =>
    e => {
      if (e) e.preventDefault();
      if (!from && !to) return;
      const label = formatRange({ from, to, config });
      const key = getRangeFacetKey({ from, to });
      if (values.find(item => item.key === key)) return;
      onChange({ selected: true, from, to, key, label, name });
      setMin(void 0);
      setMax(void 0);
    },
    updateMin: ({ setMinValue, setMin, min, maxValue }) => (e) => {
      const val = parseFloat(e.target.value) || min;
      const normalizedValue = val > maxValue ? maxValue : val
      setMin(normalizedValue)
      return setMinValue(normalizedValue)
    },
    updateMax: ({ setMaxValue, setMax, max, minValue }) => (e) => {
      const val = parseFloat(e.target.value) || max;
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
  useCurrency,
  onCommit,
  config: {
    i18n,
    precision = 0
  },
  symbolOnLeft,
  currencySymbol,
  initialMin,
  initialMax,
  max,
  min,
}: any) => (
  <div className={styles.root}>
    <div className={styles.inputWrap}>
      { 
        useCurrency && !!symbolOnLeft && currencySymbol
      }
      <NumberInput
        className={styles.input}
        defaultValue={min}
        precision={precision}
        min={initialMin}
        max={max}
        onBlur={updateMin} />
      { 
        useCurrency && !symbolOnLeft && currencySymbol
      }
    </div>
    <div className={styles.separator}>-</div>
    <div className={styles.inputWrap}>
      { 
        useCurrency && !!symbolOnLeft && currencySymbol
      }
      <NumberInput
        className={styles.input}
        defaultValue={max}
        precision={precision}
        min={min}
        max={initialMax}
        onBlur={updateMax} />
      { 
        useCurrency && !symbolOnLeft && currencySymbol
      }
    </div>
    <div className={styles.commitWrap}>
      <button className={styles.button} onClick={onCommit}>{i18n.submit}</button>
    </div>
  </div>
));
