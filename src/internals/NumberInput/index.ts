import { compose, withState, withHandlers, defaultProps, withPropsOnChange } from 'recompose';
import { DOM } from 'react';

export default compose(
  defaultProps({
    type: 'number',
    precision: 0
  }),
  withPropsOnChange(['precision'], ({ precision }) => ({
    step: precision ? 0.1 : 1
  })),
  withState('target', 'setTarget', void 0),
  withHandlers({
    ref: ({ setTarget, target }) => r => !target && r && setTarget(r),
    onBlur: ({ onBlur }) => e => onBlur(e),
    onChange: ({ target, min, max, precision }) => e => {
      if (!e.target.value) return;
      const value = parseFloat(e.target.value);
      if (value < min) return target.value = min;
      if (value > max) return target.value = max;
      return target.value = value;
    }
  })
)(DOM.input);
