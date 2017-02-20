import * as React from 'react';
import { branch, compose, withProps, withHandlers, renderNothing, renderComponent } from 'recompose';
import * as cx from 'classnames';

import { mapTypeToFacet } from 'helpers/mapTypeToFacet';

const styles = require('./styles.css');

const FacetPreview = compose(
  withProps(({ values }: any) => {
    const selectedItems = values.find(item => item.selected);
    return {
      hasSelectedItems: !!selectedItems && selectedItems.length,
      selectedItems
    }
  }),
  withHandlers({
    onReset: ({ onReset, name }) => () => onReset(name),
    onSelect: ({ name, setSelectedFacet }) => () => setSelectedFacet(name)
  })
)(({
  label,
  onSelect,
  onReset,
  hasSelectedItems
}: any) => (
  <button className={styles.preview} onClick={onSelect}>
    <div className={styles.previewContent}>
      <h5 className={styles.previewTitle}>{ label }</h5>
    </div>
    <div className={styles.previewActions}>
      {
        hasSelectedItems &&
        <span className={styles.previewRest} onClick={onReset}>Reset</span>
      }
      <span className={cx(styles.previewIcon, 'fa', 'fa-chevron-right')}/>
    </div>
  </button>
));


const FacetBody = ({
  children,
  ...props
}: any) => (
  <div className={styles.body}>
    { 
      React.cloneElement(children, {
        ...props,
        isMobile: true,
        maxItemsCount: 20 
      })
    }
  </div>
);


export const Facet: any = compose(
  branch(
    ({ selectedFacet }) => !selectedFacet,
    renderComponent(FacetPreview),
    branch(
      ({ selectedFacet, name }) => selectedFacet === name,
      renderComponent(FacetBody),
      renderNothing
    )
  )
)(renderNothing)
