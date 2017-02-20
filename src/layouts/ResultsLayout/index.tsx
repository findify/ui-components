import { Column } from 'react-virtualized';
import * as React from 'react';

import { Grid } from 'widgets/Grid';
import { BreadCrumbs } from 'widgets/BreadCrumbs';
import { Sorting } from 'widgets/Sorting';
import { Pagination } from 'widgets/Pagination';
import { ProductsList } from 'lists/ProductsList';
import { FacetsList } from 'lists/FacetsList';

import { mapTypeToFacet } from 'helpers/mapTypeToFacet';

export const ResultsLayout = ({
  config,
  isMobile,
  response,
  onFacetsChange,
  onProductClick,
  onPageChange,
  onSortChange,
  onBreadCrumbRemove,
}) => (
  <div>
    <BreadCrumbs {...response.meta} />
    <Grid columns={2}>
      <div />
      <Sorting {...response.meta} onChange={onSortChange} />
    </Grid>
    <Grid columns='4|8'>
      <FacetsList isMobile={isMobile} facets={response.facets} onChange={onFacetsChange}>
        {
          response.facets.map(facet => mapTypeToFacet(facet.type)({ ...facet, isMobile, key: facet.name }))
        }
      </FacetsList>
      <div>
        <ProductsList items={response.products} onProductClick={onProductClick} />
        <Pagination {...response.meta} />
      </div>
    </Grid>
  </div>
);
