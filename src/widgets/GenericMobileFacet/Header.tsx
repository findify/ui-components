import * as React from 'react';
import { compose, branch, renderComponent, withHandlers, withProps, renderNothing } from 'recompose';
import * as cx from 'classnames';

const styles = require('./styles.css');

const Button = ({ onClick, children, flat }: any) => (
  <button onClick={onClick} className={cx(styles.button, flat && styles.flat)}>
    {children}
  </button>
);

const RootHeader = branch(
  ({ hasNotCommittedData }: any) => hasNotCommittedData,
  renderComponent(() => (
    <div />
  )),
  renderComponent(({ onClose }) => (
    <Button onClick={onClose} flat>
      <span className={cx(styles.icon, styles.pre, 'fa', 'fa-chevron-left')} />
      Close filters
    </Button>
  )),
)(renderNothing);


const FacetHeader = branch(
  ({ changes, selectedFacet }: any) => !!changes[selectedFacet],
  renderComponent(({ onCommit }) => (
    <Button onClick={onCommit}>
      OK
    </Button>
  )),
  renderComponent(({ onBackToFacets }) => (
    <Button onClick={onBackToFacets} flat>
      <span className={cx(styles.icon, styles.pre, 'fa', 'fa-chevron-left')} />
      Back to filters
    </Button>
  )),
)(renderNothing);


export const FacetTitle = branch(
  ({ selectedFacet }: any) => !selectedFacet,
  renderNothing,
  renderComponent(compose(
    withHandlers({
      onReset: ({ onReset, name }) => () => onReset(name)
    }),
    withProps((props: any) => ({
      showRest: !!props.changes[props.selectedFacet]
    }))
    )(({ selectedFacet, onReset, showRest }: any) => (
    <div className={styles.facetTitle}>
      <h5 className={styles.facetTitleName}>{ selectedFacet }</h5>
      { showRest && <span className={styles.resetButton} onClick={onReset}>Reset</span> }
    </div>
  ))),
)(renderNothing);


export const Header = branch(
  ({ selectedFacet }: any) => !!selectedFacet,
  renderComponent(FacetHeader),
  renderComponent(RootHeader)
)(renderNothing);
