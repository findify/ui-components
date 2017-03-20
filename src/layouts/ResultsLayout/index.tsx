import { Column } from 'react-virtualized';
import * as React from 'react';
import * as cx from 'classnames';

import { Grid } from 'widgets/Grid';
import { BreadCrumbs } from 'widgets/BreadCrumbs';
import { Sorting } from 'widgets/Sorting';
import { Pagination } from 'widgets/Pagination';
import { ProductsList } from 'lists/ProductsList';
import { FacetsLayout } from '../FacetsLayout';
import { Button } from 'internals/Button';

const styles = require('./styles.css');

export const ResultsLayout = ({
  config,
  isMobile,
  response,
  onFacetsChange,
  onProductClick,
  onPageChange,
  onSortChange,
  onBreadCrumbRemove,
  onMobileFacetsOpen
}) => {
  console.log(response);
  
  return (
    <div>
      { 
        !isMobile &&
        <div>
          <BreadCrumbs
          filters={response.meta.filters}
          className={styles.breadcrumbs}
          onChange={onBreadCrumbRemove}
          config={{ ...config.breadcrumbs, facets: config.facets }} />

          <Sorting
            className={styles.sort}
            value={!!response.meta.sort.length && response.meta.sort || 'relevant'}
            onChange={onSortChange}
            options={['relevant', 'priceAZ', 'priceZA']}
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
            { config.facets.i18n.showMobileFacets }{ response.meta.filters && `(${response.meta.filters.length})`}
          </Button>

          <Sorting
            isMobile={isMobile}
            columnClass={styles.paddingLeft}
            className={cx(styles.sort, styles.mobileSort)}
            value={!!response.meta.sort.length && response.meta.sort || 'relevant'}
            onChange={onSortChange}
            options={['relevant', 'priceAZ', 'priceZA']}
            config={config.sorting} />
        </Grid>
      }

      <Grid columns={isMobile ? '12' : '4|8'}>
        {
          !isMobile &&
          <div>
            <FacetsLayout {...{ isMobile, config, response, onFacetsChange }}/>
          </div>
        }
    
        <div className={cx(styles.products, !isMobile && styles.productsWithPadding)}>
    
          <ProductsList
            config={{ ...config.productsGrid, product: config.product }}
            columnClass={styles.product}
            items={response.items}
            onProductClick={onProductClick} />
    
          <Pagination
            onChange={onPageChange}
            style={{ textAlign: 'center' }}
            config={config.pagination}
            total={Math.ceil(response.meta.total / response.meta.limit)}
            current={Math.ceil(response.meta.offset / response.meta.limit) || 1} />
    
        </div>
      </Grid>

    </div>
  )
}
