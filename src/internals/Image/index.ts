import { DOM } from 'react';
import { compose, lifecycle, mapProps, onlyUpdateForKeys, withState } from 'recompose';
import * as cx from 'classNames';

const styles = require('./styles.css');

const ImageComponent:any = compose(
  withState('isLoading', 'setIsLoading', true),
  lifecycle({
    componentWillMount() {
      const img = new Image();
      img.onload = () => this.props.setIsLoading(false);
      img.src = this.props.src;
    }
  }),
  mapProps(({ isLoading, className, src, placeholder, setIsLoading }: any) => ({
    src: isLoading ? void 0 : src,
    className: cx(className, isLoading && styles.loading || styles.loaded)
  })),
  onlyUpdateForKeys(['src']),
)(DOM.img);

export default ImageComponent;
