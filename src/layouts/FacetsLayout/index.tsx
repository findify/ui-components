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
      response.facets.map(facet => {
        const type = config.facets.types && config.facets.types[facet.name] || facet.type;
        return mapTypeToFacet(type)({
          ...facet,
          isMobile,
          config: config.facets[type],
          key: facet.name
        })
      })
    }
  </FacetsList>
);
