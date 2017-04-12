import * as React from 'react';
import {
  compose, defaultProps, mapProps,
  pure, setDisplayName, withHandlers,
  withProps, withPropsOnChange
} from 'recompose';
import { format as currencyFormat } from 'currency-formatter';
import * as cx from 'classnames';
import Truncate from 'react-truncate';
import { camelizeKeys } from 'humps';

import { Rating } from 'widgets/Rating';
import Image from 'internals/Image';
import { Stickers } from 'internals/Stickers';
import { getPrice } from 'helpers/getPrice';
import withConfig from 'helpers/withConfig';
import withHooks from 'helpers/withHooks';

const styles = require('./styles.css');
const customStyles = require('customStyles');

const Title: any = ({ text, config, ...rest }) => config.display && !!text && (
  <h5 className={cx(styles.title, customStyles.productTitle)} {...rest}>
    <Truncate lines={config.lines || false}>{text}</Truncate>
  </h5>
);

const Description: any = ({ text, config, ...rest }) => config.display && !!text && (
  <p className={cx(styles.description, customStyles.productDescription)} {...rest}>
    <Truncate lines={config.lines || false}>{text}</Truncate>
  </p>
)

const Price = ({ price, oldPrice, currency }) => price && 
  <div className={cx(styles.priceWrap, customStyles.productPrice)}>
    <span className={cx(styles.price, customStyles.productPriceRegular)}>
      { getPrice(price, currency) }
    </span>
    {
      oldPrice && oldPrice > 0 &&
      <span className={cx(styles.compare, customStyles.productPriceSale)}>
        { currencyFormat(oldPrice, currency) }
      </span>
    }
  </div>

export const HOC = compose(
  setDisplayName('Product'),

  pure,

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
    },
    stickers: {}
  }),

  mapProps(({ config, ...props }) => ({ ...camelizeKeys(props), config })),

  withHandlers({
    onClick: ({ onClick, ...rest }) => e => {
      if (onClick) {
        e.preventDefault();
        return onClick(rest);
      }
    }
  }),

  withHooks('product')
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
  onClick,
  config,
  stickers,
}: any) => (
  <a
    onClick={onClick}
    href={productUrl}
    className={cx(styles.root, customStyles.product, config.simple && styles.simple)}>
    <div className={styles.imageWrap}>
      <Image className={styles.image} src={imageUrl || thumbnailUrl} alt={title} />
      <Stickers config={config.stickers} stickers={stickers} />
    </div>
    <div className={styles.content}>
      <Title text={title} config={config.title}/>
      <Description text={description} config={config.description}/>
    </div>
    {
      reviews &&
      <div className={styles.rating}>
        <Rating count={reviews.totalReviews} value={reviews.averageScore} />
      </div>
    }
    {
      config.price.display &&
      <Price price={price} oldPrice={compareAt} currency={config.currency} />
    }
  </a>
));

export const Product: any = HOC(Component);
