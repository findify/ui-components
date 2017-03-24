import * as React from 'react';
import { compose, mapProps } from 'recompose';
import { camelizeKeys } from 'humps';
import { Rating } from 'widgets/Rating';
import { getPrice } from 'helpers/getPrice';
import { format as currencyFormat } from 'currency-formatter';
import { Grid } from 'widgets/Grid';
import Link from 'internals/Link';
import Image from 'internals/Image';

const styles = require('./styles.css');

export const ProductMatches = compose(
  mapProps(({ items, ...rest }) => ({
    ...rest,
    items: camelizeKeys(items)
  }))
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
          <Link
            className={styles.item}
            href={p.productUrl}
            key={i}>
            <div className={styles.itemImage}>
              <Image className={styles.itemSrc} src={p.thumbnailUrl} />
            </div>
            <span className={styles.itemTitle}>
              {p.title}
            </span>
            {
              p.rating && (
                <div className={styles.itemRating}>
                  <Rating value={p.rating} count={p.reviewsCount} />
                </div>
              )
            }
            <div className={styles.itemPrice}>
              {
                p.compareAt && p.compareAt > 0 && (
                  <span className={styles.itemPriceDiscount}>
                    { currencyFormat(p.compareAt, currency) }
                  </span>
                )
              }
              <span className={styles.itemPriceRegular}>
                { getPrice(p.price, currency) }
              </span>
            </div>
          </Link>
        )}
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
