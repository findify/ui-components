import * as React from 'react';
import * as cx from 'classnames';
import { compose, defaultProps, withPropsOnChange } from 'recompose';

import { Grid } from 'widgets/Grid';
import { BreadCrumbs } from 'widgets/BreadCrumbs';
import { Sorting } from 'widgets/Sorting';
import { Pagination } from 'widgets/Pagination';
import { ProductsList } from 'lists/ProductsList';
import { FacetsLayout } from '../FacetsLayout';
import { Button } from 'internals/Button';
import { Banner } from 'internals/Banner';
import { PoweredBy } from 'internals/PoweredBy';
import LoadMore from 'internals/LoadMore';
import withHooks from 'helpers/withHooks';
import withConfig from 'helpers/withConfig';

const styles = require('./styles.css');

export const ResultsLayout = compose(
  withConfig({
    view: {
      pagination: false,
      infinite: true
    }
  }),
  defaultProps({
    showFacets: true,
    columns: {
      facets: 3,
      products: 9,
    }
  }),

  withPropsOnChange(['isMobile'], ({ isMobile }) => ({
    showMobileHeader: !!isMobile,
    showFacets: !isMobile,
    showBreadcrumbs: !isMobile
  })),

  withHooks('results')
)
(({
  config,
  isMobile,
  onFacetsChange,
  onProductClick,
  onPageChange,
  onSortChange,
  onBreadCrumbRemove,
  onMobileFacetsOpen,
  onBannerClick,
  onPoweredByClick,
  onLoadMoreClick,
  onClearAll,
  columns,
  showMobileHeader,
  showFacets,
  showBreadcrumbs,
  type,
  response: {
    meta,
    facets,
    banner,
    items
  }
}: any) => (
  <div>
    {
      showBreadcrumbs &&
      <BreadCrumbs
      {...meta}
      className={styles.breadcrumbs}
      onChange={onBreadCrumbRemove}
      displayQuery={type !== 'collection'}
      config={{
        ...config.breadcrumbs,
        facets: config.facets,
        currency: config.currency
      }} />
    }
    {
      !showMobileHeader &&
      <Sorting
        className={styles.sort}
        value={!!meta.sort.length && meta.sort[0]}
        onChange={onSortChange}
        options={config.sorting.options}
        config={config.sorting} />
    }

    {
      showMobileHeader &&
      <Grid columns='6|6'>
        <Button
          onClick={onMobileFacetsOpen}
          className={styles.mobileFacetsButton}
          columnClass={styles.paddingRight}>
          { 
            config.facets.i18n.showMobileFacets
          }
          { 
            meta.filters && !!meta.filters.length &&
            ` (${meta.filters.length})`
          }
        </Button>

        <Sorting
          isMobile={isMobile}
          columnClass={styles.paddingLeft}
          className={cx(styles.sort, styles.mobileSort)}
          value={!!meta.sort.length && meta.sort[0]}
          onChange={onSortChange}
          options={config.sorting.options}
          config={config.sorting} />
      </Grid>
    }

    <Grid columns={showFacets ? `${columns.facets}|${columns.products}` : '12'}>
      {
        showFacets &&
        <FacetsLayout {...{ isMobile, config, facets, onFacetsChange, onClearAll, columnClass: styles.facets }}/>
      }
  
      <div className={cx(styles.products, !isMobile && styles.productsWithPadding)}>

        {
          banner && banner.products &&
          <Banner {...banner.products} onClick={onBannerClick} />
        }

        {
          <ProductsList
            config={{
              ...config,
              ...config.productsGrid
            }}
            columnClass={styles.product}
            items={items}
            onProductClick={onProductClick} />
        }

        {
          !!config.view.pagination && !!meta.total && meta.total > meta.limit &&
          <Pagination
            className={styles.pagination}
            onChange={onPageChange}
            style={{ textAlign: 'center' }}
            config={config.pagination}
            total={Math.ceil(meta.total / meta.limit)}
            current={Math.ceil(meta.offset / meta.limit) + 1} />
        }

        {
          !!config.view.infinite &&
          <LoadMore
            isMobile={false}
            meta={meta}
            onChange={onLoadMoreClick} />
        }

        {
          !!config.poweredByFindify &&
          <PoweredBy onClick={onPoweredByClick} />
        }
  
      </div>
    </Grid>

  </div>
));

