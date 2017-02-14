import * as React from 'react';
import { compose, withState, withHandlers } from 'recompose';

const rootStyle = {
  position: 'fixed',
  backgroundColor: 'rgba(0,0,0,.75)',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 2
};

const containerStyle = {
  position: 'absolute',
  left: 0,
  width: '75%',
  top: 0,
  bottom: 0,
};

const props = {
  facets: require('../data/facets.json')
};

const emulateHelpers = compose(
  withState('facets', 'updateFacets', props => props.facets),
  withHandlers({
    onClose: ({ toggleOpen }) => () => toggleOpen(false),

    onReset: ({ facets, updateFacets }) => facetKey =>
      updateFacets(facets.map(facet => {
        if (!facet.name !== facetKey) return facet;
        return {
          ...facet,
          values: facet.values.map(value => ({...value, selected: false }))
        }
      })
    ),

    onChange: ({ facets, updateFacets }) => changes =>
      updateFacets(facets.map(facet => {
        if (!changes[facet.name]) return facet;
        const update = changes[facet.name];
        return {
          ...facet,
          values: facet.values.map(value =>
            update[value.key] === undefined
              ? value
              : ({ ...value, selected: update[value.key] })
          )
        };
      })
    )
  })
);

export default withState('isOpen', 'toggleOpen', true)
(({ Component, toggleOpen, isOpen }: any) => {
  const Container = emulateHelpers(Component);
  return (
    <div>
    <button onClick={() => toggleOpen(true)}>Open Mobile popup</button>
    { 
      isOpen && 
      <div style={rootStyle}>
        <div style={containerStyle}>
          <Container { ...props } {...{ toggleOpen }} />
        </div>
      </div>
    }
    </div>
  );
});
