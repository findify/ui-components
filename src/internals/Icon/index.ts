import { DOM } from 'react';
import { compose, defaultProps, mapProps } from 'recompose';


// We can not use dynamic imports, coz we need to render
// icons in initialHtml in iframe mode
const icons = {
  'arrow-down': require('./icons/arrow-down.svg').default,
  'check-checked': require('./icons/check-checked.svg').default,
  'check-empty': require('./icons/check-empty.svg').default,
  'check': require('./icons/check.svg').default,
  'chevron-down': require('./icons/chevron-down.svg').default,
  'chevron-left': require('./icons/chevron-left.svg').default,
  'chevron-right': require('./icons/chevron-right.svg').default,
  'close-round': require('./icons/close-round.svg').default,
  'cross': require('./icons/cross.svg').default,
  'minus': require('./icons/minus.svg').default,
  'plus': require('./icons/plus.svg').default,
  'search': require('./icons/search.svg').default,
  'star-empty': require('./icons/star-empty.svg').default,
  'star-full': require('./icons/star-full.svg').default,
  'star-half': require('./icons/star-half.svg').default,
}

const Icon: any = compose(
  defaultProps({
    width: 16,
    height: 16
  }),
  mapProps(({ name, ...rest }) => {
    const { id, url } = icons[name];
    return {
      ...rest,
      dangerouslySetInnerHTML: { __html: `<use xlink:href="${url ? url : '#' + id}"></use>` }
    };
  })
)(DOM.svg);

export default Icon;
