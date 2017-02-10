import * as React from 'react';
import {
  branch,
  compose,
  defaultProps,
  renderComponent,
  renderNothing,
  withHandlers,
  withProps,
  withPropsOnChange,
  withState
} from 'recompose';
import * as cx from 'classnames';
import { List, AutoSizer } from 'react-virtualized';

const styles = require('./styles.css');


const Item = withHandlers({
  onClick: (props: any) => () => props.onChange(props.title, !props.selected)
})(({
  value,
  title,
  selected,
  count,
  onClick,
  style
}: any) => (
  <div style={style} className={cx(styles.item, selected && styles.selected)} onClick={onClick}>
    <div className={cx(styles.checkbox, 'fa', selected ? 'fa-check-square' : 'fa-square-o')} />
    <span className={styles.title}>{ title }</span>
    <span className={styles.count}>({ count })</span>
  </div>
));


const ExpandButton = ({
  expanded,
  onClick
}: any) => (
  <button className={styles.expand} onClick={onClick}>
    <span className={cx('fa', expanded ? 'fa-minus' : 'fa-plus')} />
    { expanded ? 'less' : 'more' }
  </button>
);


const Search = withHandlers({
  onChange: ({ onChange }: any) => e => onChange(e.target.value)
})(({
  onChange,
  value
}: any) => (
  <div className={styles.search}>
    <span className={cx(styles.searchIcon, 'fa', 'fa-search')} />
    <input className={styles.searchInput} type='search' onChange={onChange} defaultValue={value} />
  </div>
));


const VirtualizedList = ({ items, rowRenderer }) => (
  <AutoSizer disableHeight>
    {
    ({ width }) =>
      <List
        className={styles.list}
        width={width}
        height={120}
        rowCount={items.length}
        rowHeight={20}
        rowRenderer={rowRenderer} />
    }
  </AutoSizer>
);


const ListRenderer = branch(
  ({ isStatic }: any) => isStatic,
  renderComponent(({ items, className, ...rest }) => (
    <div className={cx(styles.list, className)}>
      { items.slice(0, 6).map(item => <Item {...item} {...rest} title={item.key} />) }
    </div>
  )),
  compose(
    withProps(({ items, ...rest }) => ({
      rowRenderer: ({ index, key, style }) =>
        <Item {...items[index]} {...rest} title={items[index].key} key={key} style={style} />
    })),
    renderComponent(VirtualizedList)
  )
)(renderNothing);


export const CheckboxBodyFacet = compose(
  defaultProps({
    maxLength: 6,
    showExpander: false
  }),

  withState('search', 'setSearch', ''),
  withState('expanded', 'setExpanded', false),

  withPropsOnChange(['list'], ({ list }) => ({
    selectedItems: list.filter(item => item.selected)
  })),

  withPropsOnChange(['list', 'search'], ({ list, search }) => {
    const regexp = new RegExp(search, 'ig');
    return {
      notSelectedItems: list.filter(item => !item.selected && item.key.match(regexp))
    }
  }),

  withProps((props: any) => ({
    hasSelected: !!props.selectedItems.length,
    hasNotSelected: !!props.notSelectedItems.length,
    showMoreButton: props.showExpander && props.notSelectedItems.length > props.maxLength,
    showSearch: props.showExpander && props.expanded,
    showStaticContent: 
      props.showExpander &&
      props.notSelectedItems.length <= props.maxLength ||
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
  showMoreButton
}: any) => (
  <div className={styles.wrap}>
    {
      showSearch &&
      <Search value={search} onChange={onSearchChange} />
    }
    {
      hasSelected &&
      <ListRenderer items={selectedItems} onChange={onChange} className={styles.selectedItems} isStatic />
    }
    {
      hasNotSelected &&
      <ListRenderer items={notSelectedItems} onChange={onChange} isStatic={showStaticContent} />
    }
    {
      showMoreButton &&
      <ExpandButton expanded={expanded} onClick={toggleExpand} />
    }
  </div>
));
