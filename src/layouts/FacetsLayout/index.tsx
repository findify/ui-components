import * as React from 'react';
import { FacetsList } from 'lists/FacetsList';
import withHooks from 'helpers/withHooks';
import { createEagerElement } from 'recompose';
import { mapTypeToFacet } from 'helpers/mapTypeToFacet';

export const FacetsLayout: any = withHooks('facets')(({
  response,
  onFacetsChange,
  onMobileFacetsClose,
  ...rest
}) =>
  createEagerElement(FacetsList, {
    ...rest,
    facets: response.facets,
    onClose: onMobileFacetsClose,
    onChange: onFacetsChange
  })
);
