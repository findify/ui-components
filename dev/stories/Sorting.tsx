import * as React from 'react';
import { Sorting } from '../../src/widgets/Sorting';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
const { storiesOf, action } = require('@kadira/storybook');
const product = require('../data/raw.json').items[0];

storiesOf('Sorting', module)
  .addDecorator(withKnobs)
  .addWithInfo('default', () => {
    const config = {
      i18n: {
        title: text('Sorting title', 'Sort by:'),
        options: {
          relevant: 'Relevans',
          priceAZ: 'Pris: Högt till lågt',
          priceZA: 'Pris: Lågt till högt'
        }
      }
    };
  
    return (
      <Sorting
        options={['relevant', 'priceAZ', 'priceZA']}
        config={config}
        value='relevant'
        onChange={action('Change sort')}
        />
    )
  })
