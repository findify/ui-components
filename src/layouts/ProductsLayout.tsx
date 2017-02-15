import * as React from 'react';

import { Product } from 'internals/Product';
const { Grid } = require('internals/Grid');

export const ProductsLayout = ({
  products,
  className,
  itemClassName,
  component: Component
}: any) => (
  <Grid columns='3' className={className}>
    { 
      products.map(product =>
        <Component key={product.id} {...product} columnClass={itemClassName}/>
      )
    }
  </Grid>
);
