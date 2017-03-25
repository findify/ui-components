import * as React from 'react';
import { compose, mapProps } from 'recompose';
import { camelizeKeys } from 'humps';
import { Rating } from 'widgets/Rating';
import { getPrice } from 'helpers/getPrice';
import { format as currencyFormat } from 'currency-formatter';
import { Grid } from 'widgets/Grid';
import Link from 'internals/Link';
import Image from 'internals/Image';
import withHooks from 'helpers/withHooks';

const styles = require('./styles.css');

const Product:any = withHooks('products')(({
  productUrl,
  currency,
  thumbnailUrl,
  title,
  rating,
  reviewsCount,
  compareAt,
  price
}) => (
  <Link
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
  </Link>
));

export const ProductMatches = compose(
  mapProps(({ items, ...rest }) => ({
    ...rest,
    items: camelizeKeys(items)
  })),
)(({
  items,
  title,
  currency
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
          <Product key={i} {...p} currency={currency} />
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
  }
};

type Product = {
  productUrl: string,
  thumbnailUrl: string,
  title: string,
  price: string,
  compareAt?: number,
  reviewsCount?: number,
  rating?: number
  // rating?: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5,
};
