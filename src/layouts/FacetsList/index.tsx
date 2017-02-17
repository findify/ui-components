import * as React from 'react';
import { compose, branch, defaultProps, setDisplayName, renderComponent, renderNothing } from 'recompose';
const styles = require('./styles.css');

import { MobileFacetsList } from 'internals/MobileFacetsList';
import { DesktopFacetsList } from 'internals/DesktopFacetsList';

export const FacetsList = compose(
  setDisplayName('FacetsList'),
  defaultProps({
    isMobile: false
  }),
  branch(
    ({ isMobile }) => isMobile,
    renderComponent(MobileFacetsList),
    renderComponent(DesktopFacetsList)
  )
)(renderNothing)
