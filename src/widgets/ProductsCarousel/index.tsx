import * as React from 'react';
import { compose, setDisplayName, mapProps, defaultProps } from 'recompose';
import { Product } from 'widgets/Product';
import * as cx from 'classnames';
import withConfig from 'helpers/withConfig';

import './slider.global.css';
import './slider-theme.global.css';

const Slider = require('react-slick');
const styles = require('./styles.css');

const Arrow = ({ dir, className, currentSlide, slideCount, ...props }: any) => (
  <button {...props} className={cx(styles.arrow, 'fa', `fa-chevron-${dir}`, className)} />
);

const sliderProps = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <Arrow dir='right' />,
  prevArrow: <Arrow dir='left' />
};

export const HOC = compose(
  setDisplayName('ProductsCarousel'),
  withConfig({
    productsToShow: 5
  }),
  defaultProps({
    component: Product
  })
);

export const Component = (({
  items,
  title,
  onProductClick,
  config: {
    productsToShow: slidesToShow,
    ...config
  },
  component: Component
}: any) => (
  <div className={styles.wrap}>
    { 
      title && <h4 className={styles.title}>{ title }</h4>
    }
    <Slider {...{ ...sliderProps, slidesToShow }}>
      { 
        items.map(product =>
          <div key={product.id}>
            <Component key={product.id} {...product} onClick={onProductClick} config={config.product} />
          </div>
        )
      }
    </Slider>
  </div>
));

export const ProductsCarousel:any = HOC(Component);
