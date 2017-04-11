import * as React from 'react';
import {
  compose, setDisplayName, mapProps,
  defaultProps, withPropsOnChange, pure,
  createEagerElement
} from 'recompose';
import { Product } from 'widgets/Product';
import * as cx from 'classnames';
import withConfig from 'helpers/withConfig';
import withHooks from 'helpers/withHooks';
import watchFrameSize from 'helpers/watchFrameSize';

import 'match-media'; // Polyfill for slick-slider
import './slider.global.css';
import './slider-theme.global.css';

const Slider = require('react-slick');
const styles = require('./styles.css');

const emptyObject = {};

const Arrow = ({ dir, className, currentSlide, slideCount, ...props }: any) => (
  <button {...props} className={cx(styles.arrow, 'fa', `fa-chevron-${dir}`, className)} />
);

const sliderProps = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  lazyLoad: false,
  nextArrow: <Arrow dir='right' />,
  prevArrow: <Arrow dir='left' />
};

const countProductsToShow = (width) => {
  if (width > 710) return 4;
  if (width > 500) return 3
  if (width > 290) return 2
  return 1;
};

export const HOC = compose(
  setDisplayName('ProductsCarousel'),

  withConfig({ productsToShow: 5 }),

  watchFrameSize,

  withPropsOnChange(['frameSize'],({ frameSize, config }) => ({
    slidesToShow: frameSize.width && countProductsToShow(frameSize.width) || config.productsToShow
  })),

  withHooks('slider')
);

export const Component = (({
  items,
  onProductClick,
  slidesToShow,
  config: {
    slickSetting = emptyObject,
    title,
    stickers,
    ...config
  }
}: any) => (
  <div className={styles.root}>
    { 
      title && <h4 className={styles.title}>{ title }</h4>
    }
    {
      createEagerElement(Slider,
        {
          ...sliderProps,
          ...slickSetting,
          slidesToShow
        },
        items.map(product =>
          <div key={product.id}>
            <Product
              {...product}
              onClick={onProductClick}
              config={{
                ...config.product,
                stickers
              }} />
          </div>
        )
      )
    }
  </div>
));

export const ProductsCarousel:any = HOC(Component);
