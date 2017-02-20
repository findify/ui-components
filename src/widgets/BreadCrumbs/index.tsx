import * as React from 'react';
import { template } from 'lodash';
import { compose, pure, withHandlers, withProps, withPropsOnChange } from 'recompose';
import * as cx from 'classnames';

const styles = require('./styles.css');

const colorFilterStyles = ({ values, gradientUrl }) => ({
  background: values[0] === 'Multicolor' ? `url(${gradientUrl})` : values[0].toLowerCase()
});

const valueToKey = ({ from, to }, currency = 'USD') =>
  from && to && `${from} ${currency} - ${to} ${currency}` ||
  from && !to && `${from} ${currency} and more` ||
  !from && to && `less then ${to} ${currency}`;

const filtersMapping = {
  default: (props) => props.values[0],
  color: (props) => <span className={styles.colorFilter} style={colorFilterStyles(props)} />,
  range: (props) => valueToKey(props.values[0])
};

const Filter: any = compose(
  pure,

  withProps(({ type, name, ...rest }: any) => ({
    children: (filtersMapping[name] || filtersMapping[type] || filtersMapping.default)(rest)
  })),

  withHandlers({
    onRemove: ({ onChange, ...rest }: any) => () => onChange(rest)
  })
)(({
  config,
  children,
  onRemove
}: any) =>
  <div className={styles.filter}>
    <span className={styles.filterTitle}>{children}</span>
    <button className={cx(styles.filterRemove, 'fa fa-close')} onClick={onRemove}/>
  </div>
);

export const HOC = compose(
  withPropsOnChange(['config'], ({ config: { i18n } }) => ({
    titleTemplate: template(i18n.title)
  })),

  withProps(({ query, total, titleTemplate }) => ({
    title: titleTemplate({ query, total })
  }))
);

export const Component = ({
  config,
  filters,
  onChange,
  title,
  className
}: any) => (
  <div className={cx(styles.wrap, className)}>
    <p className={styles.title}>{title}</p>
    {
      filters.map((filter, index) =>
        <Filter
          {...filter}
          label={config.facets.labels[filter.name]}
          config={config.facets[filter.type]}
          key={filter.values[0]}
          index={index}
          onChange={onChange} />
        )
    }
  </div>
);

export const BreadCrumbs: any = HOC(Component);
