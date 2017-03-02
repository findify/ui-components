import * as React from 'react';
import { Rating } from '../../src/widgets/Rating';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
const { storiesOf, action } = require('@kadira/storybook');

storiesOf('Rating', module)
  .addDecorator(withKnobs)
  .addWithInfo('default', () => {
    return (
      <Rating
        value={number('Rating', 1.5)}
        count={number('Number of reviews', 5)}
        />
    )
  })
