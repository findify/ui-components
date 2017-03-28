import * as React from 'react';
import * as cx from 'classnames';
import template from 'helpers/template';
import withConfig from 'helpers/withConfig';
import escape from 'helpers/escape';
import formatRange from 'helpers/formatRange';
import {
  compose, pure, withHandlers, withProps,
  setDisplayName, withPropsOnChange, createEagerElement
} from 'recompose';

const styles = require('./styles.css');

const filtersMapping = {
  default: ({ value }) => value,
  range: props => formatRange(props),
  color: ({ value, config: { mapping } }) => {
    const isMulticolor = value === 'Multicolor';
    const classNames = [styles.colorFilter, isMulticolor && 'multiply-gradient'];
    return (
      <span
        className={cx(...classNames)}
        style={{ background: !isMulticolor && mapping[value] }} />
    )
  },
};

const Filter: any = compose(
  pure,

  withProps(({ componentType, name, ...rest }: any) => ({
    children: (filtersMapping[componentType] || filtersMapping.default)(rest)
  })),

  withHandlers({
    onRemove: ({ onChange, ...rest }: any) => () => onChange(rest)
  })
)(({
  config,
  children,
  onRemove
}: any) => (
  <div className={styles.filter}>
    <span className={styles.filterTitle}>{children}</span>
    <button className={cx(styles.filterRemove, 'fa fa-close')} onClick={onRemove}/>
  </div>
));

export const HOC = compose(
  setDisplayName('BreadCrumbs'),

  withConfig({
    i18n: {},
    facets: {
      labels: {},
      types: {}
    }
  }),

  withPropsOnChange(['config'], ({ config: { i18n } }) => ({
    titleTemplate: template(i18n.showing)
  })),

  withPropsOnChange(['total', 'q'], ({ total, filters, q, titleTemplate, config }) => ({
    title: !q && !filters.length ? config.i18n.noQuery : titleTemplate(total, escape(q))
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
    <p className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
    {
      filters.map((filter, index) =>
        filter.values.map(item => {
          const key = [filter.name, item.value, item.from, item.to].join('_');
          return createEagerElement(Filter, {
            ...filter,
            ...item,
            key,
            index,
            onChange,
            componentType: config.facets.types[filter.name] || filter.type,
            label: config.facets.labels[filter.name],
            config: {
              ...config.facets[config.facets.types[filter.name] || filter.type],
              currency: config.currency
            }
          })
        })
      )
    }
  </div>
);

export const BreadCrumbs: any = HOC(Component);
