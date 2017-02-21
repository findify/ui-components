import * as React from 'react';
import { compose, setDisplayName, defaultProps } from 'recompose';
import withConfig from 'helpers/withConfig';

import { Product } from 'widgets/Product';
import { Grid } from 'widgets/Grid';

const HOC = compose(
  setDisplayName('ProductsList'),
  withConfig({
    columns: 3
  }),
  defaultProps({
    component: Product
  })
);

export const Component = ({
  items,
  className,
  columnClass,
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
