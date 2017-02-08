import * as React from 'react';
import { compose, renderComponent, withHandlers, branch, renderNothing } from 'recompose';
import * as cx from 'classnames';

// const { branch } = require('recompose');
const styles = require('./styles.css');

const NestingComponent = ({ isRoot, ...rest }) => React.createElement(isRoot ? 'div' : 'li', rest);

const withClickHandler = withHandlers({
  onClick: ({ onChange, selected, title }: any) => () => onChange(title, !selected)
});

const Tree = branch(
  ({ children }: any) => !!children,

  renderComponent(withClickHandler(
    ({ children, onClick, isRoot, title, count, className, selected,  ...rest }: any) =>
    <NestingComponent isRoot={isRoot} className={className || styles.nestedItem}>
      { 
        !isRoot &&
        <div className={cx(styles.item, selected && styles.selected)} onClick={onClick}>
          <p className={styles.title}>
            { title }
            <span className={cx(styles.nextIcon, 'fa', `fa-chevron-${selected ? 'down' : 'right'}`)} />
          </p>
          <span className={styles.count}>({ count })</span>
        </div>
      }
      {
        selected &&
        <ul className={styles.list}>
          { children.map(item => <Tree {...rest} {...item} title={item.key} />) }
        </ul>
      }
    </NestingComponent>
  )),

  renderComponent(withClickHandler(
    ({ title, count, onClick, selected }: any) =>
    <li className={cx(styles.item, selected && styles.selected)} onClick={onClick}>
      <p className={styles.title}>{ title }</p>
      <span className={styles.count}>({ count })</span>
    </li>
  ))
)(renderNothing);

export const CategoryBodyFacet = ({ list, onChange }: any) =>
  <Tree children={list} onChange={onChange} className={styles.wrap} isRoot selected />;
