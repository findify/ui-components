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
import * as Truncate from 'react-truncate';
import { merge } from 'lodash';
import { camelizeKeys } from 'humps';
import { getPrice } from 'helpers/getPrice';

const styles = require('./styles.css');

const defaultConfig = {
  currency: 'USD',
  title: {
    lines: 3,
    display: true
  },
  description: {
    lines: 3,
    display: true
  }
}

const Title = ({ text, config }) => config.display && text && (
  <h5 className={styles.title}>
    <Truncate lines={config.lines || false}>{text}</Truncate>
  </h5>
);

const Description = ({ text, config }) => config.display && text && (
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
        { currencyFormat(oldPrice, { code: currency }) }
      </span>
    }
  </div>

export const HOC = compose(
  setDisplayName('Product'),
  pure,

  mapProps(props => camelizeKeys(props)),

  withPropsOnChange(['image'], ({ image, imageQuery }: any) => ({
    image: imageQuery ? `${image}?${stringify(imageQuery)}` : image
  })),

  withPropsOnChange(['config'], ({ config, ...rest }: any) => ({
    ...rest,
    config: merge(defaultConfig, config),
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
      <img className={styles.image} src={imageUrl} alt={title} />
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
    <Price price={price} oldPrice={compareAt} currency={config.currency} />
  </a>
));

export const Product = HOC(Component);
