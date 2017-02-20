import { Column } from 'react-virtualized';
import * as React from 'react';

import { Grid } from 'widgets/Grid';
import { BreadCrumbs } from 'widgets/BreadCrumbs';
import { Sorting } from 'widgets/Sorting';
import { Pagination } from 'widgets/Pagination';
import { ProductsList } from 'lists/ProductsList';
import { FacetsList } from 'lists/FacetsList';

import { mapTypeToFacet } from 'helpers/mapTypeToFacet';

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
}) => {
  console.log(response);
  
  return (
    <div>
      <BreadCrumbs
        {...response.meta}
        className={styles.breadcrumbs}
        onChange={onBreadCrumbRemove}
        config={{ ...config.breadcrumbs, facets: config.facets }} />

      <Sorting
        className={styles.sort}
        value={response.meta.sort || 'relevant'}
        onChange={onSortChange}
        options={['relevant', 'priceAZ', 'priceZA']}
        config={config.sorting} />

      <Grid columns='4|8'>
        <div className={styles.filters}>
          <FacetsList
            isMobile={isMobile}
            config={config.facets}
            facets={response.facets}
            onChange={onFacetsChange}>
            {
              response.facets.map(facet =>
                mapTypeToFacet(facet.type)({ ...facet, isMobile, key: facet.name })
              )
            }
          </FacetsList>
        </div>
    
        <div className={styles.products}>
    
          <ProductsList
            config={{ ...config.productsGrid, product: config.product }}
            columnClass={styles.product}
            items={response.products}
            onProductClick={onProductClick} />
    
          <Pagination
            onChange={onPageChange}
            style={{ textAlign: 'center' }}
            config={config.pagination}
            total={Math.ceil(response.meta.total / response.meta.limit)}
            current={response.meta.offset / response.meta.limit} />
    
        </div>
      </Grid>

    </div>
  )
}
