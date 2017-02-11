import * as React from 'react';
import { compose, withState, withHandlers, mapProps, defaultProps } from 'recompose';
import * as cx from 'classnames';
import { ExpandButton } from 'internals/ExpandButton';

const styles = require('./styles.css');

import { createCursor } from './cursor';
import { Tree } from './Tree';

export const CategoryBodyFacet = compose(
  defaultProps({
    maxItemsCount: 3,
    rowHeight: 20
  }),

  mapProps(({ list: children, ...rest }) => ({
    ...rest,
    ...createCursor({ children }, [], 0),
    children
  })),

  withState('isExpanded', 'setExpanded', false),

  withHandlers({
    toggleExpander: ({ isExpanded, setExpanded }) => () => setExpanded(!isExpanded)
  })
)
((props: any) => (
  <div>
    <Tree className={styles.wrap} {...props} isRoot selected />
    {
      props.childrenCount > props.maxItemsCount &&
      <ExpandButton expanded={props.isExpanded} onClick={props.toggleExpander} />
    }
  </div>
));
