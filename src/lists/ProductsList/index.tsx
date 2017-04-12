import * as React from 'react';
import { compose, mapProps, setDisplayName, defaultProps, createEagerElement, withPropsOnChange } from 'recompose';
import withConfig from 'helpers/withConfig';
import { Product } from 'widgets/Product';
import { Grid } from 'widgets/Grid';
import withHooks from 'helpers/withHooks';
import sizeMe from 'react-sizeme';

const countColumns = (width) => {
  if (width > 400) return 3;
  return 2;
};

const HOC = compose(
  setDisplayName('ProductsList'),

  sizeMe(),
  withPropsOnChange(['size'], ({size}) => ({ 
    columns: countColumns(size.width)
  })),

  withHooks('products')
);

export const Component = ({
  items,
  className,
  columnClass,
  onProductClick,
  config,
  columns
}: any) => (
  <Grid columns={String(12 / columns)} className={className}>
    { 
      items.map(product =>
        createEagerElement(Product, {
          ...product,
          key: product.id,
          config: {
            ...config.product,
            stickers: config.stickers
          },
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
