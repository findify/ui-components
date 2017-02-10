import * as React from 'react';
import { compose, renderComponent, withHandlers, renderNothing, withProps } from 'recompose';
import * as cx from 'classnames';

const { branch } = require('recompose');
const styles = require('./styles.css');

import { NestedTree } from './NestedTree';
import { SingleItem } from './SingleItem';
import { createCursor } from './cursor';

var Tree = compose(
  branch(
    ({ cursor }: any) => cursor.length > 2, // Max level is 2
    renderComponent(({ children, cursor, ...rest }) =>
      <Tree {...rest} {...children[cursor[0]]} cursor={cursor.filter((_, i) => i !== 1)}/>
    )
  ),

  branch(
    ({ cursor, index, hasSiblings }: any) => hasSiblings && !!cursor.length && index !== cursor[0],
    renderNothing
  ),

  withHandlers({
    onClick: ({ onChange, selected, title }: any) => () => onChange(title, !selected)
  }),

  withProps(({ children }) => ({
    hasSiblings: children && !!children.find(child => child.selected && child.children)
  })),

  branch(
    ({ children }: any) => !!children,
    renderComponent(props => <NestedTree {...props} Nested={Tree} />),
    renderComponent(SingleItem)
  )
)(renderNothing);

export const CategoryBodyFacet = ({ list: children, onChange }: any) =>
  <Tree
    cursor={createCursor({ children }, [])}
    className={styles.wrap}
    children={children}
    onChange={onChange}
    isRoot
    selected />;
