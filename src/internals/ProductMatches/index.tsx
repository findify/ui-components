import * as React from 'react';

import { Rating } from 'widgets/Rating';

const styles = require('./styles.css');

export const ProductMatches = ({
  products,
  title
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
    <div className={styles.items}>
      {
        products && products.map((p: Product, i: number) =>
          <a
            className={styles.item}
            href={p.link}
            key={i}>
            <div className={styles.itemImage}>
              <img className={styles.itemSrc} src={p.imageLink} />
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
                p.discountPrice && (
                  <span className={styles.itemPriceDiscount}>
                    {p.discountPrice}
                  </span>
                )
              }
              <span className={styles.itemPriceRegular}>
                {p.price}
              </span>
            </div>
          </a>
        )}
    </div>
  </div>
);

type Props = {
  products?: Product[],
  title?: string,
};

type Product = {
  link: string,
  imageLink: string,
  title: string,
  price: string,
  discountPrice?: string,
  reviewsCount?: number,
  rating?: number,
  // rating?: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5,
};
