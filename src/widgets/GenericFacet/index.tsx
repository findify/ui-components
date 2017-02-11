import * as React from 'react'
import { compose, withState, withHandlers, renderNothing, renderComponent, branch } from 'recompose';
import * as cx from 'classnames';

const styles = require('./styles.css');

const Content = ({ children, ...rest }) => (
  <div className={styles.content}>
  {
    React.Children.map(children, (child: any) => React.cloneElement(child, rest))
  }
  </div>
);

const WrappedContent = ({
  isOpen,
  title,
  toggleOpen,
  ...rest
}: any) => (
  <div className={styles.wrap}>
    <div className={styles.toggle}>
      <h5 className={styles.title}>{ title }</h5>
      <button
        className={cx(styles.icon, 'fa', isOpen ? 'fa-minus' : 'fa-plus')}
        onClick={toggleOpen} />
    </div>
    { isOpen && <Content {...rest} /> }
  </div>
);

export const GenericFacet = branch(
  ({ raw }) => raw,
  renderComponent(Content),
  renderComponent(
    compose(
      withState('isOpen', 'toggleFacet', props => props.isOpen),
      withHandlers({
        toggleOpen: ({ isOpen, toggleFacet }) => () => toggleFacet(!isOpen)
      })
    )(WrappedContent)
  )
)(renderNothing);
