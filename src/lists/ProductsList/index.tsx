import * as React from 'react';
import { compose, setDisplayName, defaultProps } from 'recompose';

const { Product } = require('widgets/Product');
const { Grid } = require('widgets/Grid');

const HOC = compose(
  setDisplayName('ProductsList'),
  defaultProps({
    columns: 3,
    component: Product
  })
);

export const Component = ({
  items,
  className,
  itemClassName,
  columns,
  component: Component,
  onProductClick
}: any) => (
  <Grid columns={String(12 / columns)} className={className}>
    { 
      items.map(product =>
        <Component key={product.id} {...product} onClick={onProductClick} columnClass={itemClassName}/>
      )
    }
  </Grid>
);

export const ProductsList = HOC(Component);
