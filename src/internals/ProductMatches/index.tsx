import * as React from 'react';
import { branch, compose, mapProps, pure, renderNothing, withHandlers } from 'recompose';
import { camelizeKeys } from 'humps';
import { Rating } from 'widgets/Rating';
import { getPrice } from 'helpers/getPrice';
import { format as currencyFormat } from 'currency-formatter';
import { Grid } from 'widgets/Grid';
import Link from 'internals/Link';
import Image from 'internals/Image';
import withHooks from 'helpers/withHooks';

const styles = require('./styles.css');

const Product: any = compose(
  pure,

  withHandlers({
    onClick: ({ onProductClick, productUrl, id }) => e => {
      e.preventDefault();
      return onProductClick({ productUrl, id });
    }
  }),

  withHooks('products')
)(({
  productUrl,
  currency,
  thumbnailUrl,
  title,
  rating,
  reviewsCount,
  compareAt,
  price,
  onClick
} : any) => (
  <a
    onClick={onClick}
    className={styles.item}
    href={productUrl}>
    <div className={styles.itemImage}>
      <Image className={styles.itemSrc} src={thumbnailUrl} />
    </div>
    <span className={styles.itemTitle}>
      {title}
    </span>
    {
      rating && (
        <div className={styles.itemRating}>
          <Rating value={rating} count={reviewsCount} />
        </div>
      )
    }
    <div className={styles.itemPrice}>
      {
        compareAt && compareAt > 0 && (
          <span className={styles.itemPriceDiscount}>
            { currencyFormat(compareAt, currency) }
          </span>
        )
      }
      <span className={styles.itemPriceRegular}>
        { getPrice(price, currency) }
      </span>
    </div>
  </a>
));

export const ProductMatches = compose(
  branch(
    ({ items }) => !items || !items.length,
    renderNothing,
  ),
  mapProps(({ items, ...rest }) => ({
    ...rest,
    items: camelizeKeys(items)
  })),
)(({
  items,
  title,
  currency,
  onProductClick
}: Props) => (
  <div className={styles.wrap}>
    {
      title && (
        <div className={styles.title}>
          <span className={styles.searchSuggestionsTitle}>
            {title}
          </span>
        </div>
      )
    }
    <Grid columns='6' className={styles.items}>
      {
        items && items.map((p: Product, i: number) =>
          <Product
            {...p}
            key={p.id}
            currency={currency}
            onProductClick={onProductClick} />
        )
      }
    </Grid>
  </div>
));

type Props = {
  items?: Product[],
  title?: string,
  currency: {
    code?: string
  },
  onProductClick?: () => void 
};

type Product = {
  id: any,
  productUrl: string,
  thumbnailUrl: string,
  title: string,
  price: string,
  compareAt?: number,
  reviewsCount?: number,
  rating?: number
  // rating?: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5,
};
