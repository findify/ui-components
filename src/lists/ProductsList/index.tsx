import * as React from 'react';
import { compose, setDisplayName, defaultProps, createEagerElement } from 'recompose';
import withConfig from 'helpers/withConfig';

import { Product } from 'widgets/Product';
import { Grid } from 'widgets/Grid';

const HOC = compose(
  setDisplayName('ProductsList'),
  withConfig({
    columns: 3
  }),
);

export const Component = ({
  items,
  className,
  columnClass,
  onProductClick,
  config
}: any) => (
  <Grid columns={String(12 / config.columns)} className={className}>
    { 
      items.map(product =>
        createEagerElement(Product, {
          ...product,
          key: product.id,
          config: config.product,
          onClick: onProductClick,
          columnClass: columnClass
        })
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
