import * as React from 'react';
import { FacetsList } from '../../src/lists/FacetsList';
import { mapTypeToFacet } from '../../src/helpers/mapTypeToFacet';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
const { storiesOf, action } = require('@kadira/storybook');
const facets = require('../data/raw.json').facets;
import { withFacets } from '../helpers/withFacets';
import cfg from '../data/config';

const Component = withFacets(FacetsList);

storiesOf('Facets List', module)
  .addDecorator(withKnobs)
  .addWithInfo('Desktop', () => {
    return (
      <div style={{ width: `${number('Width', 400)}px`}}>
        <Component
          config={cfg.facets}
          facets={facets}
          onChange={action('Change facet')}>
          {
            facets.map(facet =>
              mapTypeToFacet(cfg.facets[facet.name], facet.type)({
                ...facet,
                isMobile: false,
                key: facet.name
              })
            )
          }
        </Component>
      </div>
    )
  })

  .addWithInfo('Mobile', () => {
    return (
      <div style={{ width: `${number('Width', 400)}px`}}>
        <Component
          isMobile
          config={cfg.facets}
          facets={facets}
          onChange={action('Change facet')}>
          {
            facets.map(facet =>
              mapTypeToFacet(cfg.facets[facet.name], facet.type)({
                ...facet,
                isMobile: true,
                key: facet.name
              })
            )
          }
        </Component>
      </div>
    )
  })
