import * as React from 'react';
import { compose, withReducer, withHandlers } from 'recompose';

// const rootStyle = {
//   position: 'fixed',
//   backgroundColor: 'rgba(0,0,0,.75)',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   zIndex: 2
// };

// const containerStyle = {
//   position: 'absolute',
//   left: 0,
//   width: '75%',
//   top: 0,
//   bottom: 0,
// };

const createValueUpdater = (facets, name) => (next) => [
  ...facets.map(facet =>
    facet.name !== name
    ? facet
    : next(facet)
  )
];

const getCategoryChanges = (values, changes) => {
  const hasKey = values.some(value => value.key === changes.key);  
  if (hasKey) {
    return [
      ...values.map(value =>
        value.key !== changes.key
        ? value
        : { ...value, ...changes }
      )
    ]
  }
  return values;
};

const getRangeChanges = (values, changes) => {
  const hasKey = values.some(value => value.from === changes.from && value.to === changes.to);
  if (!hasKey) return [ ...values, changes ];
  return [
    ...values.map(value =>
      value.from !== changes.from && value.to !== changes.to
      ? value
      : changes
    )
  ]
};

const reducer = (state, { type, name, changes }) => {
  const updater = createValueUpdater(state, name);

  switch (type) {
    case 'category':
      return updater(facet => ({
        ...facet,
        values: getCategoryChanges(facet.values, changes)
      }));

    case 'range':
      return updater(facet => ({
        ...facet,
        values: getRangeChanges(facet.values, changes)
      }));
  
    default:
      return updater(facet => ({
        ...facet,
        values: [...facet.values.map(value =>
          value.key !== changes.key
          ? value
          : changes
        )]
      }));
  }
};

const props = {
  facets: require('../data/facets.json')
};

const emulateMJS = withReducer('facets', 'onChange', reducer, props => props.facets);

export default ({ Component }) => {
  const Container = emulateMJS(Component);
  return (
    <div style={{ margin: 50, width: 400, position: 'relative' }}>
      <Container {...props} />
    </div>
  )
};
