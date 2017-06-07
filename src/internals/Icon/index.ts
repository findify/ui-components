import { DOM } from 'react';
import { compose, defaultProps, mapProps } from 'recompose';

const Icon: any = compose(
  defaultProps({
    width: 16,
    height: 16
  }),
  mapProps(({ name, ...rest }) => {
    require(`./icons/${name}.svg`);
    return {
      ...rest,
      dangerouslySetInnerHTML: { __html: `<use xlink:href="#${name}"></use>` }
    };
  })
)(DOM.svg);

export default Icon;
