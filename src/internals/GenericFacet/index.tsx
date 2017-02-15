import * as React from 'react'
import { compose, withState, withHandlers, renderNothing, renderComponent, branch, defaultProps } from 'recompose';
import * as cx from 'classnames';
import { genericStateMapper } from 'helpers/genericStateMapper';

const styles = require('./styles.css');

const Content = ({ children, ...rest }) => (
  <div className={styles.content}>
  { children }
  </div>
);

const WrappedContent = ({
  isOpen,
  title,
  toggleOpen,
  ...rest
}: any) => {
  console.log(rest);
  
  return (
  <div className={styles.wrap}>
    <div className={styles.toggle}>
      <h5 className={styles.title}>{ title }</h5>
      <button
        className={cx(styles.icon, 'fa', isOpen ? 'fa-minus' : 'fa-plus')}
        onClick={toggleOpen} />
    </div>
    { isOpen && <Content {...rest} /> }
  </div>
)};

export const GenericFacet = compose(
  defaultProps({
    isOpen: true
  }),
  withState('isOpen', 'toggleFacet', props => props.isOpen),
  withHandlers({
    toggleOpen: ({ isOpen, toggleFacet }: any) => () => toggleFacet(!isOpen)
  })
)(WrappedContent);
