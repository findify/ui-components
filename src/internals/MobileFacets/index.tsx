import * as React from 'react';
import { compose, withHandlers, withProps, withState } from 'recompose';
import * as cx from 'classnames';

const styles = require('./styles.css');

import { Header, FacetTitle } from './Header';
import { Facet } from './Facet';

export const MobileFacets = compose(
  withState('changes', 'updateChanges', {}),
  withState('selectedFacet', 'setSelectedFacet', false),
  withProps(({ changes, facets }) => ({
    hasNotCommittedData: !!Object.keys(changes).length,
    facets: facets.map(facet => {
        if (!Object.keys(changes).includes(facet.name)) return facet;
        const changedFacet = changes[facet.name];
        return {
          ...facet,
          values: facet.values.map(value =>
            changedFacet[value.key] !== undefined
              ? { ...value, selected: changedFacet[value.key]}
              : value
          )
        }
      })
  })),
  withHandlers({
    onCommit: ({ updateChanges, onChange, changes, updateFacets, setSelectedFacet }) => () => {
      onChange(changes);
      setSelectedFacet(false);
      updateChanges({});
    },

    getSelected: ({ facets }) => facetKey => facets
        .find(facet => facet.name === facetKey)
        .values
        .filter(value => value.selected)
        .length,

    onChange: ({ updateChanges, changes }) => (facetKey, key, data) => 
      updateChanges({ ...changes, [facetKey]: { ...changes[facetKey], [key]: data} }),

    onReset: ({ onReset, updateChanges, changes }) => facetKey => {
      updateChanges(Object.keys(changes).reduce((acc, key) =>
        key === facetKey ? acc : { ...acc, [key]: changes[key] }
      , {}));
      onReset(facetKey);
    },

    onBackToFacets: ({ setSelectedFacet }) => () => setSelectedFacet(false)
  })
)
(({
  facets,
  ...rest
}: Response) => (
  <div className={cx(styles.wrap, !rest.selectedFacet && styles.wrapDark)}>
    <div className={styles.header}>
      <Header {...rest} />
    </div>
    <FacetTitle {...rest}/>
    <div className={styles.content}>
    { facets.map(facet => <Facet key={facet.name} {...rest} {...facet} />) }
    </div>
  </div>
));


type Response = {
  facets: any[],
  children: any[],
  changes: any,
  selectedFacet: string|boolean,
  onChange: any,
  onCommit: any,
  onReset: any
}
