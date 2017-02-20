import { compose, defaultProps, flattenProp, mapProps } from 'recompose';
import { withFacets } from './withFacets';
import { withMeta } from './withMeta';

const response = require('../data/raw.json');
const config = require('../data/config.ts');

export const withServerEmulator = compose(
  defaultProps({
    response,
    config
  }),

  flattenProp('response'), // Flatten response to manage state

  withFacets,
  withMeta,

  mapProps(({ meta, items, facets, banner, redirect, ...rest }) => ({
    ...rest,
    response: { // Structure back response object 
      meta,
      items,
      facets,
      banner,
      redirect
    }
  }))
);
