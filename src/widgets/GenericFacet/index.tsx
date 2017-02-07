import * as React from 'react'
import { compose, withState, withHandlers } from 'recompose';
import * as cx from 'classnames';

const styles = require('./styles.css');


export const GenericFacet = compose(
  withState('isOpen', 'toggleFacet', props => props.isOpen),
  withHandlers({
    toggleOpen: ({ isOpen, toggleFacet }) => () => toggleFacet(!isOpen)
  })
)(({
  isOpen,
  title,
  children,
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
    {
      isOpen &&
      <div className={styles.content}>
      {
        React.Children.map(children, (child: any) => React.cloneElement(child, rest))
      }
      </div>
    }
  </div>
));
