import * as React from 'react';
import { compose, defaultProps, withHandlers, withProps, withPropsOnChange, withState } from 'recompose';
import * as cx from 'classnames';

import { ExpandButton } from 'internals/ExpandButton';
import { SearchInput } from 'internals/SearchInput';
import { ListRenderer } from './ListRenderer';

const styles = require('./styles.css');

export const CheckboxBodyFacet = compose(
  defaultProps({
    rowHeight: 20,
    maxItemsCount: 6,
    showExpander: false
  }),

  withState('search', 'setSearch', ''),
  withState('expanded', 'setExpanded', false),

  withPropsOnChange(['values'], ({ values }) => ({
    selectedItems: values.filter(item => item.selected)
  })),

  withPropsOnChange(['values', 'search'], ({ values, search }) => {
    const regexp = new RegExp(search, 'ig');
    return {
      notSelectedItems: values.filter(item => !item.selected && item.key.match(regexp))
    }
  }),

  withProps((props: any) => ({
    hasSelected: !!props.selectedItems.length,
    hasNotSelected: !!props.notSelectedItems.length,
    showMoreButton: props.showExpander && props.notSelectedItems.length > props.maxItemsCount,
    showSearch: props.showExpander && props.expanded,
    showStaticContent: 
      props.showExpander &&
      props.notSelectedItems.length < props.maxItemsCount ||
      !props.expanded
  })),

  withHandlers({
    toggleExpand: ({ expanded, setExpanded }) => () => setExpanded(!expanded),
    onSearchChange: ({ setSearch }) => query => setSearch(query)
  })
)(({
  selectedItems,
  notSelectedItems,
  search,
  expanded,

  onChange,
  toggleExpand,
  onSearchChange,

  showSearch,
  hasSelected,
  hasNotSelected,
  showStaticContent,
  showMoreButton,
  ...rest
}: any) => (
  <div className={styles.wrap}>
    {
      showSearch &&
      <SearchInput value={search} onChange={onSearchChange} />
    }
    {
      hasSelected &&
      <ListRenderer items={selectedItems} onChange={onChange} className={styles.selectedItems} isStatic />
    }
    {
      hasNotSelected &&
      <ListRenderer {...rest} items={notSelectedItems} onChange={onChange} isStatic={showStaticContent} />
    }
    {
      showMoreButton &&
      <ExpandButton expanded={expanded} onClick={toggleExpand} />
    }
  </div>
));
