import * as React from 'react';
import { compose, renderComponent, withHandlers, renderNothing, withProps } from 'recompose';

const { branch } = require('recompose');

import { NestedTree } from './NestedTree';
import { SingleItem } from './SingleItem';

export const Tree = compose(
  branch(
    ({ cursor }: any) => cursor.length > 2, // Max level is 2
    renderComponent(({ values, cursor, ...rest }) =>
      <Tree {...rest} {...values[cursor[0]]} cursor={cursor.filter((_, i) => i !== 1)}/>
    )
  ),

  branch(
    ({ cursor, index, hasSelectedSiblings }: any) =>
      hasSelectedSiblings && !!cursor.length && index !== cursor[0],
    renderNothing
  ),

  withHandlers({
    onClick: ({ onChange, selected, title, name, ...rest }: any) => () =>
      onChange({ key: title, selected: !selected })
  }),

  withProps(({ values, level }) => ({
    hasSelectedSiblings: values && values.some(child => child.selected && child.values),
  })),

  branch(
    ({ values, ...rest }: any) => {
      console.log(rest);
      
      return !!values
    },
    renderComponent(props => <NestedTree {...props} Nested={Tree} />),
    renderComponent(SingleItem)
  )
)(renderNothing);
