import * as React from 'react';
import { compose, branch, defaultProps, setDisplayName, renderComponent, renderNothing } from 'recompose';
const styles = require('./styles.css');


export const FacetsList = compose(
  setDisplayName('FacetsList'),
  defaultProps({
    mobile: false
  }),
  branch(
    ({ mobile }) => mobile,
    renderComponent(renderNothing),
    renderComponent(renderNothing)
  )
)(renderNothing)
