import * as React from 'react';
import { FacetsList } from 'lists/FacetsList';

import { mapTypeToFacet } from 'helpers/mapTypeToFacet';

export const FacetsLayout: any = ({
  isMobile,
  config,
  response,
  onFacetsChange,
  onMobileFacetsClose
}) => (
  <FacetsList
    isMobile={isMobile}
    config={config.facets}
    facets={response.facets}
    onClose={onMobileFacetsClose}
    onChange={onFacetsChange}>
    {
      response.facets.map(facet =>
        mapTypeToFacet(config.facets.types[facet.name], facet.type)({
          ...facet,
          isMobile,
          key: facet.name
        })
      )
    }
  </FacetsList>
);
