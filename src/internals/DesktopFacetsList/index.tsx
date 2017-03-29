import * as React from 'react';
import { setDisplayName, createEagerElement } from 'recompose';
import { mapTypeToFacet } from 'helpers/mapTypeToFacet';

export const DesktopFacetsList = setDisplayName('DesktopFacetsList')
(({ facets, onChange, config }: DesktopFacetsListType) =>
facets.map(facet => {
  const type = config.facets.types && config.facets.types[facet.name] || facet.type;
  const factory = mapTypeToFacet(type);
  return factory({
    ...facet,
    isMobile: false,
    config: { ...config.facets[type], currency: config.currency },
    key: facet.name
  })
}));

type DesktopFacetsListType = {
  children: any[],
  onChange: void,
  config: any,
  facets
};
