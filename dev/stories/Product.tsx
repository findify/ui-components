import * as React from 'react';
import { Product } from '../../src/widgets/Product';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
const { storiesOf, action } = require('@kadira/storybook');
const product = require('../data/raw.json').items[0];

storiesOf('Product', module)
  .addDecorator(withKnobs)
  .addWithInfo('default', () => {
    const config = {
      currency: text('currency', 'USD'),
      image: {
        query: {}
      },
      title: {
        lines: number('title.lines', 3),
        display: boolean('title.display', true)
      },
      description: {
        lines: number('description.lines', 3),
        display: boolean('description.display', true)
      }
    };
  
    return (
      <div style={{ width: `${number('Product wrap width', 200)}px`}}>
        <Product
          {...product}
          config={config}
          onClick={action('Click on product')}
          />
      </div>
    )
  })
