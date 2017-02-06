import * as React from 'react';

import { RatingWidget } from 'widgets/Rating';

const styles = require('./styles.css');

export const ProductMatches = ({
  productMatchesTitle,
  productMatches
}: Props) => (
  <div className={styles.wrap}>
    {
      productMatchesTitle && (
        <div className={styles.title}>
          <span className="findify-autocomplete-title">
            {productMatchesTitle}
          </span>
        </div>
      )
    }
    <div className={styles.items}>
      {
        productMatches && productMatches.map((p: Product, i: number) =>
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
                  <RatingWidget
                    value={p.rating}
                    reviewsCount={p.reviewsCount}
                  />
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
  productMatches?: Product[],
  productMatchesTitle?: string,
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
