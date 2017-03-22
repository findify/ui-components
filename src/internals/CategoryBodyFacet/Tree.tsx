import * as React from 'react';
import { compose, renderComponent, withHandlers, renderNothing, withPropsOnChange } from 'recompose';

const { branch } = require('recompose');

import { NestedTree } from './NestedTree';
import { SingleItem } from './SingleItem';

export const Tree = compose(
  withPropsOnChange(['cursor'], ({ cursor, track, index }) => ({
    track: index === void 0 ? track : track.push(cursor.first() || index)
  })),

  branch(
    ({ cursor }: any) => cursor.size > 2, // Max level is 2
    renderComponent(({ children, cursor, ...rest }) =>
      <Tree {...rest} {...children[cursor.first()]} cursor={cursor.shift()}/>
    )
  ),

  branch(
    ({ cursor, index, hasSelectedSiblings }: any) =>
      hasSelectedSiblings && !cursor.isEmpty() && index !== cursor.first(),
    renderNothing
  ),

  withPropsOnChange(['children'], ({ children }) => ({
    hasSelectedSiblings: children && children.some(child => child.selected && child.children),
  })),

  withHandlers({
    onClick: ({ onChange, selected, title, name, track, ...rest }: any) => () =>
      onChange({ key: title, selected: !selected, track })
  }),

  branch(
    ({ children, ...rest }: any) => !!children,
    renderComponent(props => <NestedTree {...props} Nested={Tree} />),
    renderComponent(SingleItem)
  )
)(renderNothing);
