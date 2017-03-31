import * as React from 'react';
import * as cx from 'classnames';

import { Grid } from 'widgets/Grid';
import { BreadCrumbs } from 'widgets/BreadCrumbs';
import { Sorting } from 'widgets/Sorting';
import { Pagination } from 'widgets/Pagination';
import { ProductsList } from 'lists/ProductsList';
import { FacetsLayout } from '../FacetsLayout';
import { Button } from 'internals/Button';
import { Banner } from 'internals/Banner';
import withHooks from 'helpers/withHooks';

const styles = require('./styles.css');

export const ResultsLayout = withHooks('results')
(({
  config,
  isMobile,
  response,
  onFacetsChange,
  onProductClick,
  onPageChange,
  onSortChange,
  onBreadCrumbRemove,
  onMobileFacetsOpen,
  onBannerClick
}: any) => {
  return (
    <div>
      { 
        !isMobile &&
        <div>
          <BreadCrumbs
          {...response.meta}
          className={styles.breadcrumbs}
          onChange={onBreadCrumbRemove}
          config={{
            ...config.breadcrumbs,
            facets: config.facets,
            currency: config.currency
          }} />

          <Sorting
            className={styles.sort}
            value={!!response.meta.sort.length && response.meta.sort[0]}
            onChange={onSortChange}
            options={config.sorting.options}
            config={config.sorting} />
        </div>
      }
      {
        !!isMobile &&
        <Grid columns='6|6'>
          <Button
            onClick={onMobileFacetsOpen}
            className={styles.mobileFacetsButton}
            columnClass={styles.paddingRight}>
            { 
              config.facets.i18n.showMobileFacets
            }
            { 
              response.meta.filters && !!response.meta.filters.length &&
              ` (${response.meta.filters.length})`
            }
          </Button>

          <Sorting
            isMobile={isMobile}
            columnClass={styles.paddingLeft}
            className={cx(styles.sort, styles.mobileSort)}
            value={!!response.meta.sort.length && response.meta.sort[0]}
            onChange={onSortChange}
            options={config.sorting.options}
            config={config.sorting} />
        </Grid>
      }

      <Grid columns={isMobile ? '12' : '4|8'}>
        {
          !isMobile &&
          <FacetsLayout {...{ isMobile, config, response, onFacetsChange }}/>
        }
    
        <div className={cx(styles.products, !isMobile && styles.productsWithPadding)}>

          {
            response.banner && response.banner.products &&
            <Banner {...response.banner.products} onClick={onBannerClick} />
          }
          <ProductsList
            config={{
              ...config.productsGrid,
              stickers: config.stickers,
              product: {
                ...config.product,
                currency: config.currency
              }
            }}
            columnClass={styles.product}
            items={response.items}
            onProductClick={onProductClick} />

          {
            !!response.meta.total && response.meta.total > response.meta.limit &&
              <Pagination
                onChange={onPageChange}
                style={{ textAlign: 'center' }}
                config={config.pagination}
                total={Math.ceil(response.meta.total / response.meta.limit)}
                current={Math.ceil(response.meta.offset / response.meta.limit) + 1} />
          }
    
        </div>
      </Grid>

    </div>
  )
})
