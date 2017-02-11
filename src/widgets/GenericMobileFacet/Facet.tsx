import * as React from 'react';
import { branch, compose, withProps, withHandlers, renderNothing, renderComponent } from 'recompose';
import * as cx from 'classnames';

import { mapTypeToFacet } from './mapTypeToFacet';

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
    onSelect: ({ name, setSelectedFacet }) => () => {
      console.log(name);
      
      setSelectedFacet(name)
    },
    onReset: ({ onReset, name }) => e => {
      e.preventDefault();
      return onReset(name);
    }
  })
)(({
  name,
  onSelect,
  onReset,
  hasSelectedItems
}: any) => (
  <button className={styles.preview} onClick={onSelect}>
    <div className={styles.previewContent}>
      <h5 className={styles.previewTitle}>{ name }</h5>
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

const FacetBody = withHandlers({
  onChange: ({ onChange, name }) => (key, data) => onChange(name, key, data)
})((props: any) => (
  <div className={styles.body}>
    { mapTypeToFacet(props.type)({ ...props, raw: true, mobile: true }) }
  </div>
));

export const Facet = compose(
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
