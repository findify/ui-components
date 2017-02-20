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
  columnClass,
  columns,
  component: Component,
  onProductClick,
  config
}: any) => (
  <Grid columns={String(12 / config.columns)} className={className}>
    { 
      items.map(product =>
        <Component
          key={product.id}
          {...product}
          config={config.product}
          onClick={onProductClick}
          columnClass={columnClass} />
      )
    }
  </Grid>
);

export const ProductsList: any = HOC(Component);

type ProductsListType = {
  columns: string | number,
  onProductClick: void,
  items: any[]
};
