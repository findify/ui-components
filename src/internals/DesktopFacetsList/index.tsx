import * as React from 'react';
import { setDisplayName, createEagerElement, withPropsOnChange } from 'recompose';
import { mapTypeToFacet } from 'helpers/mapTypeToFacet';

const Facet = withPropsOnChange(
  ['type'], ({ config, facet }) => {
    const type = config.facets.types && config.facets.types[facet.name] || facet.type;
    return {
      type,
      config: { ...config.facets[type], currency: config.currency },
      factory: mapTypeToFacet(type)
    }
  }
)(({
  factory,
  facet,
  ...rest
}: any) =>
  factory({ ...rest, ...facet, isMobile: false })
);

export const DesktopFacetsList = setDisplayName('DesktopFacetsList')
(({ facets, ...rest }: DesktopFacetsListType) => 
  <div>
    {
      facets.map(facet => createEagerElement(Facet, {
        ...rest,
        facet,
        key: facet.name,
        label: rest.config.facets.labels[facet.name],
      }))
    }
  </div>
)

type DesktopFacetsListType = {
  children: any[],
  onChange: void,
  config: any,
  facets
};
