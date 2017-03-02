import * as React from 'react';
import { ProductsCarousel } from '../../src/widgets/ProductsCarousel';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
const { storiesOf, action } = require('@kadira/storybook');
const products = require('../data/raw.json').items;

storiesOf('Products Carousel', module)
  .addDecorator(withKnobs)
  .addWithInfo('default', () => {

    const config = {
      productsToShow: number('config.productsToShow', 6),
      product: {
        currency: text('config.product.currency', 'USD'),
        image: {
          query: {}
        },
        title: {
          lines: number('config.product.title.lines', 3),
          display: boolean('config.product.title.display', true)
        },
        description: {
          lines: number('config.product.description.lines', 3),
          display: boolean('config.product.description.display', true)
        }
      }
    };
  
    return (
      <div style={{ width: '90%', margin: '0 auto'}}>
        <ProductsCarousel
          items={products}
          config={config}
          onProductClick={action('Click on product')}
          />
      </div>
    )
  })
