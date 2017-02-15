import * as React from 'react';
import { compose, setDisplayName, defaultProps } from 'recompose';

const { Product } = require('widgets/Product');
const { Grid } = require('widgets/Grid');

const HOC = compose(
  setDisplayName('ProductsGrid'),
  defaultProps({
    columns: 3,
    component: Product
  })
);

export const Component = ({
  products,
  className,
  itemClassName,
  columns,
  component: Component
}: any) => (
  <Grid columns={String(12 / columns)} className={className}>
    { 
      products.map(product =>
        <Component key={product.id} {...product} columnClass={itemClassName}/>
      )
    }
  </Grid>
);

export const ProductsGrid = HOC(Component);
