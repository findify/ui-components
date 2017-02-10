import * as React from 'react';
import { format as currencyFormat } from 'currency-formatter';

import { RatingWidget } from 'widgets/Rating';

const styles = require('./styles.css');


const Title = ({ text }) => text &&
  <h5 className={styles.title}>{text}</h5>

const Description = ({ text }) => text &&
  <p className={styles.description}>{text}</p>

const Price = ({ price, compareAt, currency = 'USD' }) => price &&
  <div className={styles.priceWrap}>
    <span className={styles.price}>
      { currencyFormat(price[0], { code: currency }) }
    </span>
    {
      compareAt &&
      <span className={styles.compare}>
        { currencyFormat(compareAt, { code: currency }) }
      </span>
    }
  </div>

export const Product = ({
  productUrl,
  imageUrl,
  description,
  title,
  reviews,
  price,
  compareAt,
  ...rest
}: any) => {
  return (
    <a href={productUrl} className={styles.wrap}>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={imageUrl} alt={title} />
      </div>
      <div className={styles.description}>
        <Title text={title} />
        <Description text={description} />
      </div>
      {
        reviews &&
        <div className={styles.rating}>
          <RatingWidget reviewsCount={reviews.totalReviews} value={reviews.averageScore} />
        </div>
      }
      <Price price={price} compareAt={compareAt}/>
    </a>
  )
}
