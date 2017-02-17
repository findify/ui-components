import * as React from 'react';
import { compose, withState } from 'recompose';

const props = {
  options: ['relevant', 'priceAZ', 'priceZA'],
  // TODO: `title` should be in `i18n`
  title: 'Sortera efter:',
  i18n: {
    // TODO: All these 3 keys should be in `options` object.
    relevant: 'Relevans',
    priceAZ: 'Pris: Högt till lågt',
    priceZA: 'Pris: Lågt till högt'
  }
};

export default compose(
  withState('value', 'setValue', props.options[0]),
)
(({ Component, value, setValue }: any) => (
  <div style={{ margin: 50, width: 400, position: 'relative' }}>
    <Component { ...props } value={value} onChange={option => setValue(option.value)}/>
  </div>
));
