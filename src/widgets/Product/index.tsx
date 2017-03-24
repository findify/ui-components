import * as React from 'react';
import {
  compose,
  defaultProps,
  mapProps,
  pure,
  setDisplayName,
  withHandlers,
  withProps,
  withPropsOnChange
} from 'recompose';
import { format as currencyFormat } from 'currency-formatter';
import { stringify } from 'querystring';
import { Rating } from 'widgets/Rating';
import Truncate from 'react-truncate';
import { merge } from 'lodash';
import { camelizeKeys } from 'humps';
import Image from 'internals/Image';
import { getPrice } from 'helpers/getPrice';
import withConfig from 'helpers/withConfig';

const styles = require('./styles.css');


const Title: any = ({ text, config }) => config.display && !!text && (
  <h5 className={styles.title}>
    <Truncate lines={config.lines || false}>{text}</Truncate>
  </h5>
);

const Description: any = ({ text, config }) => config.display && !!text && (
  <p className={styles.description}>
    <Truncate lines={config.lines || false}>{text}</Truncate>
  </p>
)

const Price = ({ price, oldPrice, currency }) => price && 
  <div className={styles.priceWrap}>
    <span className={styles.price}>
      { getPrice(price, currency) }
    </span>
    {
      oldPrice && oldPrice > 0 &&
      <span className={styles.compare}>
        { currencyFormat(oldPrice, currency) }
      </span>
    }
  </div>

export const HOC = compose(
  setDisplayName('Product'),
  withConfig({
    currency: {
      code: 'USD'
    },
    title: {
      lines: 3,
      display: true
    },
    description: {
      lines: 3,
      display: true
    },
    price: {
      display: true
    }
  }),

  pure,

  mapProps(props => camelizeKeys(props)),

  withPropsOnChange(['image'], ({ image, imageQuery }: any) => ({
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
  productUrl,
  imageUrl,
  imageQuery,
  description,
  thumbnailUrl,
  title,
  reviews,
  price,
  compareAt,
  currency,
  onClick,
  config,
}: any) => (
  <a onClick={onClick} href={productUrl} className={styles.wrap}>
    <div className={styles.imageWrap}>
      <Image className={styles.image} src={imageUrl} placeholder={thumbnailUrl} alt={title} />
    </div>
    <div className={styles.description}>
      <Title text={title} config={config.title} />
      <Description text={description} config={config.description}/>
    </div>
    {
      reviews &&
      <div className={styles.rating}>
        <Rating count={reviews.totalReviews} value={reviews.averageScore} />
      </div>
    }
    {
      config.price.display && <Price price={price} oldPrice={compareAt} currency={config.currency} />
    }
  </a>
));

export const Product: any = HOC(Component);
