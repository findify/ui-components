import * as React from 'react';
import { compose, setDisplayName, withHandlers, withPropsOnChange, withState, createEagerElement } from 'recompose';
import * as cx from 'classnames';

const styles = require('./styles.css');

import { getRangeFacetKey } from 'helpers/getRangeFacetKey';
import { Header, FacetTitle } from './Header';
import { Facet } from './Facet';

export const MobileFacetsList = compose(
  setDisplayName('MobileFacetsList'),

  withState('changes', 'updateChanges', {}),
  withState('selectedFacet', 'setSelectedFacet', false),

  withPropsOnChange(['changes', 'facets'], ({ changes, facets }) => ({
    hasNotCommittedData: !!Object.keys(changes).length,
    facets: facets.map(facet => {
      if (!Object.keys(changes).includes(facet.name)) return facet;
  
      const changedFacet = changes[facet.name];
      const isRange = facet.type === 'range';
      let values = facet.values;
  
      if (isRange) {
        const valuesKeys = facet.values.map(value => getRangeFacetKey(value));
        const notInList = Object.keys(changedFacet).filter(key => !valuesKeys.includes(key));
        if (!!notInList.length) {
          values = [...notInList.map(key => changedFacet[key].changes), ...values]
        }
      }
      
      const update = {
        ...facet,
        values: values.map(value => {
          const key = isRange ? getRangeFacetKey(value) : value.value;
          return !!changedFacet[key]
            ? changedFacet[key].changes
            : value
        })
      }
      return update;
    })
  })),
  withHandlers({
    onCommit: ({ updateChanges, onChange, changes, updateFacets, setSelectedFacet }) => (direct) => {
      const update = direct || changes;
      const res = new Array();
      
      for (let facet of Object.keys(update)) {
        for (let field of Object.keys(update[facet])) {
          res.push(update[facet][field]);
        }
      }
      updateChanges({});
      onChange(res);
      setSelectedFacet(false);
    },

    getSelected: ({ facets }) => facetKey => facets
      .find(facet => facet.name === facetKey)
      .values
      .filter(value => value.selected)
      .length,

    onChange: ({ updateChanges, changes }) => (update) =>  {
      const { name, changes: { value } } = update;
      updateChanges({ ...changes, [name]: { ...changes[name], [value]: update } });
    },

    onBackToFacets: ({ setSelectedFacet }) => () => setSelectedFacet(false)
  }),

  withHandlers({
    onReset: ({ onCommit, onChange, updateChanges, facets, changes }) => (type, name, commit = true) => {
      const facet = facets.find(facet => facet.name === name);
      let update = {...changes};
      const hasUnsaved = !!update[name];

      if (hasUnsaved) {
        delete update[name];
      }

      for (let value of facet.values) {
        if (value.selected) {
          update = {
            ...update,
            [name]: {
              ...update[name],
              [value.value]: {
                type: facet.type,
                changes: {
                  ...value,
                  selected: false
                }
              }
            }
          };
        }
      };
      if (commit) return onCommit(update);
      return update;
    },
  }),
  withHandlers({
    onResetAll: ({ facets, onReset, getSelected, onCommit }) => () => {
      const update = facets
        .filter(facet => !!getSelected(facet.name))
        .map(facet => onReset(facet.type, facet.name, false))
      return onCommit(Object.assign({}, ...update));
    }
  })
)
(({
  children,
  facets,
  config,
  ...rest
}: Response) => (
  <div className={cx(styles.wrap, !rest.selectedFacet && styles.wrapDark)}>
    <div className={styles.header}>
      <Header {...rest} facets={facets} config={config} />
    </div>
    <FacetTitle {...rest} facets={facets} config={config} />
    <div className={styles.content}>
    { 
      children.map((child, index) =>
        createEagerElement(Facet, {
          ...rest,
          ...facets[index],
          key: facets[index].name,
          label: config.labels[facets[index].name],
          children: child,
          globalConfig: config
        })
      )
    }
    </div>
  </div>
));


type Response = {
  children: any[],
  facets: any[],
  changes: any,
  selectedFacet: string|boolean,
  onChange: any,
  onCommit: any,
  onReset: any,
  config: any
}
