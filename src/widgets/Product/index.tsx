import * as React from 'react';
import { compose, withHandlers, mapProps, withProps, defaultProps, setDisplayName } from 'recompose';
import { format as currencyFormat } from 'currency-formatter';
import { stringify } from 'querystring';
import { Rating } from 'widgets/Rating';

const styles = require('./styles.css');


const Title = ({ text }) => text &&
  <h5 className={styles.title}>{text}</h5>

const Description = ({ text }) => text &&
  <p className={styles.description}>{text}</p>

const Price = ({ price, oldPrice, currency }) => price &&
  <div className={styles.priceWrap}>
    <span className={styles.price}>
      { currencyFormat(price[0], { code: currency }) }
    </span>
    {
      oldPrice &&
      <span className={styles.compare}>
        { currencyFormat(oldPrice, { code: currency }) }
      </span>
    }
  </div>

export const HOC = compose(
  setDisplayName('Product'),

  defaultProps({
    currency: 'USD'
  }),

  mapProps(({
    productUrl,
    imageUrl,
    compareAt,
    ...rest
  }: any) => ({
    url: productUrl,
    image: imageUrl,
    oldPrice: compareAt,
    ...rest
  })),

  withProps(({ image, imageQuery }: any) => ({
    image: imageQuery ? `${image}?${stringify(imageQuery)}` : image
  })),

  withHandlers({
    onClick: ({ onClick, ...rest }) => e => {
      if (onClick) {
        e.preventDefault();
        return onClick(rest);
      }
    }
  })
);

export const Component = (({
  url,
  image,
  imageQuery,
  description,
  title,
  reviews,
  price,
  oldPrice,
  currency,
  onClick
}: any) =>
  <a onClick={onClick} href={url} className={styles.wrap}>
    <div className={styles.imageWrap}>
      <img className={styles.image} src={image} alt={title} />
    </div>
    <div className={styles.description}>
      <Title text={title} />
      <Description text={description} />
    </div>
    {
      reviews &&
      <div className={styles.rating}>
        <Rating count={reviews.totalReviews} value={reviews.averageScore} />
      </div>
    }
    <Price price={price} oldPrice={oldPrice} currency={currency} />
  </a>
);

export const Product = HOC(Component);
