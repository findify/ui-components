import * as React from 'react';
import { BreadCrumbs } from '../../src/widgets/BreadCrumbs';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
const { storiesOf, action } = require('@kadira/storybook');
const filters = require('../data/raw.json').meta.filters
import cfg from '../data/config';

storiesOf('BreadCrumbs', module)
  .addDecorator(withKnobs)
  .addWithInfo('default', () => {
    const config = {
      facets: cfg.facets,
      i18n: {
        title: text('config.i18n.title', 'Showing ${ total } results for ${ query }:'),
      }
    };
  
    return (
      <BreadCrumbs
        filters={filters}
        config={config}
        onChange={action('Breadcrumb has been removed')}
        />
    )
  })
