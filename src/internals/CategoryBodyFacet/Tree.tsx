import * as React from 'react';
import {
  compose, renderComponent, withHandlers,
  renderNothing, withProps, withPropsOnChange,
  createEagerElement, pure
} from 'recompose';

const { branch } = require('recompose');

import { NestedTree } from './NestedTree';
import { SingleItem } from './SingleItem';

export const Tree = compose(
  pure,

  withPropsOnChange(['cursor'], ({ cursor, track, index, value }) => ({
    track: index === void 0 ? track : track.push(index)
  })),

  branch(
    ({ cursor }: any) => cursor.size > 2, // Max level is 2
    renderComponent(({ children, cursor, ...rest }) =>
      createEagerElement(Tree, {...rest, ...children[cursor.first()], cursor: cursor.shift() })
    ),
  ),

  branch(
    ({ hasSelectedSiblings, selected }: any) => hasSelectedSiblings && !selected,
    renderNothing
  ),

  withPropsOnChange(['children'], ({ children }) => ({
    hasSelectedSiblings: !!(children && children.some(child => child.selected && child.has_children)),
  })),

  withHandlers({
    onClick: ({ onChange, selected, track }: any) => () => onChange({ selected: !selected, track })
  }),

  branch(
    ({ has_children, cursor, track }: any) => has_children,
    renderComponent(props => createEagerElement(NestedTree, { ...props, Nested: Tree })),
    renderComponent(SingleItem)
  )
)(renderNothing);
