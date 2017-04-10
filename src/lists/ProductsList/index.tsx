import * as React from 'react';
import { compose, setDisplayName, defaultProps, createEagerElement, withPropsOnChange } from 'recompose';
import withConfig from 'helpers/withConfig';
import watchFrameSize from 'helpers/watchFrameSize';
import { Product } from 'widgets/Product';
import { Grid } from 'widgets/Grid';
import withHooks from 'helpers/withHooks';


const countColumns = (width) => {
  if (width > 600) return 3;
  return 2;
};

const HOC = compose(
  setDisplayName('ProductsList'),
  withConfig({
    columns: 3
  }),

  watchFrameSize,

  withPropsOnChange(['frameSize'], ({ columns, frameSize, config }) => ({
    columns: columns || (frameSize.width && countColumns(frameSize.width) || config.columns)
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
