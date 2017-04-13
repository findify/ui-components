import { compose, createEagerFactory, branch, lifecycle, mapProps, getContext } from 'recompose';
import { findDOMNode } from 'react-dom';
import { identity, isObject, isFunction } from 'lodash';
import PropTypes from 'prop-types';

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
  const updateCallback = instance =>
    instance.props.hooks[featureType].didUpdate({
      node: findDOMNode(instance),
      data: instance.props
    });

  return compose(
    getContext({ hooks: PropTypes.object }),

    hook('mapProps', mapProps((props:any) => {
      const { hooks, ...restProps } = props;  
      const propsToMap = removeFunctions(restProps);
      const mappedProps = hooks[featureType].mapProps(propsToMap);
      if (!mappedProps || !isObject(mappedProps) || mappedProps === propsToMap) return props;
      return {
        ...props,
        ...mappedProps
      };
    })),

    hook('didUpdate', lifecycle({
      componentDidUpdate(){
        this.props.hooks[featureType].didUpdate({
          node: findDOMNode(this),
          data: this.props
        });
      }
    })),

    hook('didMount', lifecycle({
      componentDidMount() {
        this.props.hooks[featureType].didMount({
          node: findDOMNode(this),
          data: this.props
        });
      },
    })),
  )(BaseComponent);
}
