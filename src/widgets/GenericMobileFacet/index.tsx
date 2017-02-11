import * as React from 'react';
import { compose, withHandlers, withProps, withState } from 'recompose';
import * as cx from 'classnames';

const styles = require('./styles.css');

import { Header } from './Header';
import { Facet } from './Facet';

export const GenericMobileFacet = compose(
  withState('facets', 'updateFacets', props => props.facets),
  withState('changes', 'updateChanges', {}),
  withState('selectedFacet', 'setSelectedFacet', ''),
  withProps(({ changes }) => ({
    hasNotCommittedData: !!Object.keys(changes).length
  })),
  withHandlers({
    onChange: ({ updateChanges, changes }) => (facetKey, key, data) => 
      updateChanges({ ...changes, [facetKey]: { ...changes[facetKey], [key]: data} }),

    onCommit: ({ updateChanges, changes, facets, updateFacets, setSelectedFacet }) => () => {
      console.log(changes, facets);
      setSelectedFacet('');
      updateChanges({});
    },

    onBackToFacets: ({ setSelectedFacet }) => () => setSelectedFacet(''),

    onReset: ({ facets, updateFacets }) => name =>
      updateFacets(facets.map(facet =>
        facet.name !== name
        ? facet
        : {
          ...facet,
          values: facet.values.map(value => !value.selected ? value : {...value, selected: false } )
        }
      )),
  
    onClose: () => () => console.log('Close window')
  })
)
(({
  facets,
  ...rest
}: Response) => (
  <div className={styles.wrap}>
    <div className={styles.header}>
      <Header {...rest} />
    </div>
    <div className={styles.content}>
    {
      facets.map(facet => <Facet key={facet.name} {...rest} {...facet} />)
    }
    </div>
  </div>
));


type Response = {
  facets: any[],
  changes: any,
  selectedFacet: string|boolean,
  onChange: any,
  onCommit: any
}
