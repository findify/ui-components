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

const Filter = compose(
  pure,
  withProps(({ type, name, ...rest }: any) => ({
    children: (filtersMapping[name] || filtersMapping[type] || filtersMapping.default)(rest)
  })),
  withHandlers({
    onRemove: ({ index, onChange }: any) => () => onChange(index)
  }),
)(({
  children,
  onRemove
}: any) =>
  <div className={styles.filter}>
    <span className={styles.filterTitle}>{children}</span>
    <button className={cx(styles.filterRemove, 'fa fa-close')} onClick={onRemove}/>
  </div>
);

export const BreadCrumbs = compose(
  withPropsOnChange(['i18n'], ({ i18n }) => ({
    titleTemplate: template(i18n.title)
  })),
  withProps(({ query, total, titleTemplate }) => ({
    title: titleTemplate({ query, total })
  }))
)(({
  title,
  filters,
  onChange
}: any) =>
  <div className={styles.wrap}>
    <p className={styles.title}>{title}</p>
    {
      filters.map((filter, index) =>
        <Filter {...filter} key={filter.values[0]} {...{ index, onChange }} />)
    }
  </div>
)
