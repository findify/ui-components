import * as React from 'react';
import { compose, withState, withHandlers, mapProps } from 'recompose';
import * as cx from 'classnames';
import { ExpandButton } from 'internals/ExpandButton';

const styles = require('./styles.css');

import { createCursor } from './cursor';
import { Tree } from './Tree';

// TODO: Category facet is like radiobutton. User can select only one value in the list
// TODO: Possible we need to remove state handling inside the component, as in current MJS, we are
// setting the value to the facet after response was came form server. So, we need to make all facets components like BreadCrumbs, it's correct.
export const CategoryBodyFacet = compose(
  mapProps(({ values, ...rest }) => ({
    ...rest,
    ...createCursor({ values }, [], 0),
    values
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
      props.childrenCount > props.config.maxItemsCount &&
      <ExpandButton
        expanded={props.isExpanded}
        onClick={props.toggleExpander}
        label={props.isExpanded ? props.config.i18n.less : props.config.i18n.more} />
    }
  </div>
));
