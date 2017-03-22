import * as React from 'react'
import {
  branch,
  compose,
  defaultProps,
  mapProps,
  renderComponent,
  renderNothing,
  setDisplayName,
  withHandlers,
  withState
} from 'recompose';
import * as cx from 'classnames';

const styles = require('./styles.css');

export const Raw = ({ children, ...rest }) => (
  <div className={cx(styles.content, rest.isMobile && styles.mobile)}>
  {
    React.Children.map(children, (child: any) => React.cloneElement(child, rest))
  }
  </div>
);

export const Wrapper = (Content) => compose(
  defaultProps({
    isOpen: true
  }),
  withState('isOpen', 'toggleFacet', props => props.isOpen),
  withHandlers({
    toggleOpen: ({ isOpen, toggleFacet }: any) => () => toggleFacet(!isOpen)
  })
)(({
  isOpen,
  toggleOpen,
  label,
  ...rest
}: any) => (
  <div className={styles.wrap}>
    <div className={styles.toggle}>
      <h5 className={styles.title}>{ label }</h5>
      <button className={cx(styles.icon, 'fa', isOpen ? 'fa-minus' : 'fa-plus')} onClick={toggleOpen} />
    </div>
    { isOpen && <Content {...rest} /> }
  </div>
));

export const HOC = (Content, WrappedContent) => compose(
  setDisplayName('GenericFacet'),
  mapProps(({ stateToProps, ...props }: any) => ({
    ...props,
    values: stateToProps ? stateToProps(props) : props.values
  })),
  withHandlers({
    onChange: ({ name, type, values, onChange }: any) => changes => {
      onChange({ type, name, changes });
    }
  }),
  branch(
    // Return raw content for Mobile wrapper
    ({ isMobile }: any) => isMobile,
    renderComponent(Content),
    renderComponent(WrappedContent(Content))
  )
)(renderNothing);

export const GenericFacet: any = HOC(Raw, Wrapper);
