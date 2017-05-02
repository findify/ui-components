import { compose, createEagerFactory, branch, lifecycle, mapProps, getContext } from 'recompose';
import { findDOMNode } from 'react-dom';
import { identity, isObject, isFunction, isArray } from 'lodash';
import PropTypes from 'prop-types';

const types = {
  mapProps: 'mapProps',
  didUpdate: 'didUpdate',
  didMount: 'didMount'
};

const removeFunctions = props => Object.keys(props).reduce((acc, key) =>
  isFunction(props[key]) ? acc : { ...acc, [key]: props[key] }
, {});

const check = (type, hookName) => ({ hooks }) => hooks && hooks[type] && hooks[type][hookName];

const createHook = type => (hookName, decorator) => branch(
  check(type, hookName),
  decorator,
  identity
);

export default featureType => BaseComponent => {
  const hook = createHook(featureType);

  return compose(
    getContext({ hooks: PropTypes.object, featureConfig: PropTypes.object }),

    hook(types.mapProps, mapProps((props:any) => {
      const { hooks, ...restProps } = props;  
      const propsToMap = removeFunctions(restProps);
      
      const mappedProps = hooks[featureType][types.mapProps](propsToMap);

      if (!mappedProps || !isObject(mappedProps) || mappedProps === propsToMap) return props;
      return {
        ...props,
        ...mappedProps
      };
    })),

    hook(types.didUpdate, lifecycle({
      componentDidUpdate(){
        this.props.hooks[featureType][types.didUpdate](
          {
            node: findDOMNode(this),
            data: this.props
          },
          this.props.featureConfig
        );
      }
    })),

    hook(types.didMount, lifecycle({
      componentDidMount() {
        this.props.hooks[featureType][types.didMount](
          {
            node: findDOMNode(this),
            data: this.props
          },
          this.props.featureConfig
        );
      },
    })),
  )(BaseComponent);
}
