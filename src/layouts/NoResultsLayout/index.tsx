import * as React from 'react';
import { compose, withPropsOnChange } from 'recompose';
import { ProductsList } from 'lists/ProductsList';
import template from 'helpers/template';
import withHooks from 'helpers/withHooks';
import escape from 'helpers/escape';

const styles = require('./styles.css');

const HOC = compose(
  withPropsOnChange(['config', 'query'], ({ config, query }) => ({
    title: template(config.i18n.noResult)(escape(query))
  })),
  withHooks('noResults')
);

const Component: any = ({
  items,
  title,
  onProductClick,
  config
}) => (
  <div className={styles.root}>
    <p className={styles.title} dangerouslySetInnerHTML={{ __html: title }}/>
    <ProductsList {...config} items={items} onProductClick={onProductClick} />
  </div>
);

export const NoResultsLayout:any = HOC(Component);
