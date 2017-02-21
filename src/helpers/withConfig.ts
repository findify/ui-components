import { createEagerFactory } from 'recompose';
import { createHelper } from 'recompose/createHelper';
import { merge } from 'lodash';

const withConfig = config => BaseComponent => {
  const factory = createEagerFactory(BaseComponent)
  const WithConfig = ownerProps =>
    factory({ ...ownerProps, config: merge({}, config, ownerProps.config) });
  return WithConfig
}

export default createHelper(withConfig, 'withConfig')
