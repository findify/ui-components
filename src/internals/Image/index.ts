import { DOM } from 'react';
import { compose, lifecycle, onlyUpdateForKeys, pure, withProps, mapProps, withState } from 'recompose';
import * as cx from 'classnames';

const styles = require('./styles.css');

const ImageComponent: any = compose(
  pure,

  withState('isLoading', 'setIsLoading', true),
  withState('isMounted', 'setIsMounted', true),

  lifecycle({
    componentWillMount() {
      const img = new Image();
      img.onload = () => this.props.isMounted && this.props.setIsLoading(false);
      img.src = this.props.src;
    },
    componentWillUnmount() {
      this.props.setIsMounted(false);
    }
  }),

  mapProps(({ isLoading, className, src, placeholder, setIsLoading, ...rest }: any) => ({
    ...rest,
    src: isLoading ? void 0 : src,
    className: cx(className, isLoading && styles.loading || styles.loaded)
  })),

  onlyUpdateForKeys(['src']),
)(DOM.img);

export default ImageComponent;
