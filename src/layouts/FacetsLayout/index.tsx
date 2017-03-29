import * as React from 'react';
import { FacetsList } from 'lists/FacetsList';
import withHooks from 'helpers/withHooks';
import { createEagerElement } from 'recompose';
import { mapTypeToFacet } from 'helpers/mapTypeToFacet';

export const FacetsLayout: any = withHooks('facets')(({
  isMobile,
  config,
  response,
  onFacetsChange,
  onMobileFacetsClose
}) =>
  createEagerElement(FacetsList, {
    isMobile,
    config,
    facets: response.facets,
    onClose: onMobileFacetsClose,
    onChange: onFacetsChange
  })
);
