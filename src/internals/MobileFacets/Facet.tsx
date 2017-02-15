import * as React from 'react';
import { branch, compose, withProps, withHandlers, renderNothing, renderComponent } from 'recompose';
import * as cx from 'classnames';

const styles = require('./styles.css');

import { ColorFacet } from 'widgets/ColorFacet';
import { CheckboxFacet } from 'widgets/CheckboxFacet';
import { CategoryFacet } from 'widgets/CategoryFacet';
import { RangeFacet } from 'widgets/RangeFacet';

const components = [
  ColorFacet, CheckboxFacet, CategoryFacet, RangeFacet
];

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


const FacetBody = compose(
  withHandlers({
    onChange: ({ onChange, name }) => (key, data) => onChange(name, key, data)
  }),
  withProps((props: any) => ({
    Component: components.find(comp => comp.type === props.type)
  }))
)(({
  getComponent,
  ...props
}: any) => (
  <div className={styles.body}>
    { 
      ({ ...props, raw: true, mobile: true, maxItemsCount: 20 })
    }
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
