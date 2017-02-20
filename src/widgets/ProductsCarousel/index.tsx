import * as React from 'react';
import { compose, setDisplayName, mapProps, defaultProps } from 'recompose';
import { Product } from 'widgets/Product';
import * as cx from 'classnames';

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
  defaultProps({
    productsToShow: 5,
    component: Product
  })
);

export const Component = (({
  items,
  title,
  productsToShow: slidesToShow,
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
            <Component key={product.id} {...product} />
          </div>
        )
      }
    </Slider>
  </div>
));

export const ProductsCarousel = HOC(Component);
