import { Component, PropTypes } from 'react';

import { createEagerFactory } from 'recompose';
export default BaseComponent => {
  const factory = createEagerFactory(BaseComponent);
  let win: any = void 0;

  return class FrameSizeWatcher extends Component<any, any>{
    constructor(props) {
      super(props);
      this.resize = this.resize.bind(this);
    }

    state = {
      frameSize: {
        width: 0,
        height: 0
      }
    }

    static contextTypes = {
      window: PropTypes.any
    }
  
    resize() {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const { frameSize } = this.state;
      if (width !== frameSize.width || height !== frameSize.height) {
        this.setState({ frameSize: { width, height }});
      }
    }
  
    componentDidMount() {
      const { window: frameWindow } = this.context;
      win = frameWindow || window;
      win.addEventListener('resize', this.resize);
      win.addEventListener('load', this.resize);
    }

    componentWillUnmount() {
      win.removeEventListener('resize', this.resize);
      win.removeEventListener('load', this.resize);
    }

    render() {
      return factory({ ...this.props, ...this.state });
    }
  }
};
