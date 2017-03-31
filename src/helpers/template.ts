import { memoize } from 'lodash';

export default (template = '', selector = /%s/g) => memoize((...args) => {
  let index = -1;
  return template.replace(selector, () => {
    index++;
    return args[index] || '';
  });
})
