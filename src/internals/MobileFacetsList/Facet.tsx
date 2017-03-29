import * as React from 'react';
import {
  branch,
  compose,
  renderComponent,
  renderNothing,
  withHandlers,
  withProps,
  withPropsOnChange
} from 'recompose';
import * as cx from 'classnames';

import { mapTypeToFacet } from 'helpers/mapTypeToFacet';

const styles = require('./styles.css');

const FacetPreview = compose(
  withPropsOnChange(['type'], ({ config, facet }) => ({
    type: config.facets.types && config.facets.types[facet.name] || facet.type
  })),

  withPropsOnChange(['values'], ({ values }: any) => {
    const selectedItems = values.filter(item => item.selected).map(item => item.value);
    
    return {
      hasSelectedItems: !!selectedItems && !!selectedItems.length,
      selectedItems: selectedItems.join(', ')
    }
  }),
  withHandlers({
    onReset: ({ onReset, name, type }) => e => onReset(type, name),
    onSelect: ({ name, setSelectedFacet }) => () => setSelectedFacet(name)
  })
)(({
  label,
  onSelect,
  onReset,
  hasSelectedItems,
  selectedItems,
  config,
  globalConfig
}: any) => (
  <button className={styles.preview} onClick={onSelect}>
    <div className={styles.previewContainer}>
      <div className={styles.previewContent}>
        <h5 className={styles.previewTitle}>{ label }</h5>
        {
          !!selectedItems &&
            <div className={styles.selectedItems}>
              {selectedItems}
            </div>
        }
      </div>
      <div className={styles.previewActions}>
        {
          hasSelectedItems &&
          <span className={styles.previewReset} onClick={onReset}>
            {globalConfig.facets.i18n.reset}
          </span>
        }
        <span className={cx(styles.previewIcon, 'fa', 'fa-chevron-right')}/>
      </div>
    </div>
  </button>
));


const FacetBody = withPropsOnChange(
  ['type'],
  ({ config, facet }) => {
    const type = config.facets.types && config.facets.types[facet.name] || facet.type;
    return {
      type,
      factory: mapTypeToFacet(type),
      config: {
        ...config.facets[type],
        currency: config.currency
      }
    }
  }
)(({
  facet,
  type,
  factory,
  config,
}: any) =>
<div className={styles.body}>
  {
    factory({
      ...facet,
      config,
      isMobile: true
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
