import * as React from 'react';
import { compose, withHandlers } from 'recompose';
import { mapTypeToFacet } from 'helpers/mapTypeToFacet';

const { FacetsList } = require('widgets/FacetsList');

export const FacetsLayout = compose(
  withHandlers({
    onChangeMobile: ({ onChange }) => (facets: any[]) =>
      facets.forEach(facet => onChange(facet))
  })
)(({
  isMobile = true,
  facets,
  onChange,
  onChangeMobile
}: any) => (
  <FacetsList isMobile={isMobile} facets={facets} onChange={isMobile ? onChangeMobile : onChange}>
    {
      facets.map(facet => mapTypeToFacet(facet.type)({ ...facet, isMobile, key: facet.name }))
    }
  </FacetsList>
));
