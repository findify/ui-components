import * as React from 'react';
import { compose, withState, withHandlers, mapProps, onlyUpdateForKeys } from 'recompose';
import * as cx from 'classnames';
import { compact, get } from 'lodash';
import { ExpandButton } from 'internals/ExpandButton';
import { List } from 'immutable';

const styles = require('./styles.css');

import { createCursor } from './cursor';
import { Tree } from './Tree';

const mapArrayToFacetsCreator = (children, selected) => (array, forceUnselect?) =>
array.map((position, index) => {
  const selector = array.takeWhile((_, i) => i <= index).map(p => `[${p}]`).join('.children');
  try {
    const { children: _, ...facet } = get(children, selector);
    if (forceUnselect) return { ...facet, selected: false };
    return index === array.size - 1 ? { ...facet, selected } : facet;
  } catch (e) {
    return;
  }
});

export const CategoryBodyFacet = compose(
  onlyUpdateForKeys(['values']),
  mapProps(({ values: children, ...rest }) => ({
    ...rest,
    ...createCursor({ children }, List([]) , 0),
    track: List([]),
    children,
  })),

  withState('isExpanded', 'setExpanded', false),

  withHandlers({
    toggleExpander: ({ isExpanded, setExpanded }) => () => setExpanded(!isExpanded),
    onChange: ({ children, onChange, cursor }) => ({ track, selected }) => {
      console.log(track);
      
      const mapArray = mapArrayToFacetsCreator(children, selected);
      return onChange(
        mapArray(cursor, true)
        .concat(mapArray(track))
        .filter(v => !!v)
        .toArray()
      );
    }
  })
)
((props: any) => (
  <div>
    <Tree className={styles.wrap} {...props} isRoot selected />
    {
      props.childrenCount > props.config.maxItemsCount &&
      <ExpandButton
        expanded={props.isExpanded}
        onClick={props.toggleExpander}
        label={props.isExpanded ? props.config.i18n.less : props.config.i18n.more} />
    }
  </div>
));
