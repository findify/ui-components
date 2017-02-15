/*import { Column, FlexColumn, Grid } from 'react-virtualized';
import * as React from 'react';
import { createSearchStore } from '...';
const store = createSearchStore({...});

// const Provder = compose(
//   withState('response', 'setResponse', void 0),
//   lifecycle({
//     componentWillMount() {
//       this.unsubscribe = store.subscribe((e) => {
//         if (e.type === 'responseSuccess') {
//           this.props.setResponse(store.get('response'))
//         }
//       });
//     },
//     componentWillUnmount() {
//       this.unsubscribe();
//     }
//   }),
//   withHandlers({
//     sync: props => (data) =>
//       store.emit({ type: 'search', payload: '....'}).emit({ type: 'request' })
//   })
// )
// (props) =>

class Provider extends React.Component {
  state = {
    response: void 0
  };

  componentWillMount() {
    this.store = createSearchStore({...});
    this.unsubscribe = store.subscribe((e) => {
      if (e.type === 'responseSuccess') {
        this.setState({ response: store.get('response') })
      }
    });
    this.props.request && this.sync(this.props.request);
  };

  componentWillUnmount() {
    this.unsubscribe();
  }

  sync(requestBody) {
    return this.store.emit({ type: 'setRequestBody', payload: requestBody }).emit({ type: 'request' })
  }

  // TODO: call onChange with whole filter
  removeFilter({ type, name, values }) {
    if (type === 'terms') {
      this.store.emit({ type: 'unsetCheckboxFacet', payload: { type, name, value: values[0] } })
    }
    // ...etc
  }

  changeFiltersMobile(facets) {
    facets.forEach(facet => {
      if (type === 'terms') {
        this.store
          .emit({ type: 'unsetCheckboxFacet', payload: { type, name, value: values[0] } })
      })
    })
    store.emit({ type: 'request' })
  }

  changeFilters(facet) {
   if (type === 'terms') {
      this.store
        .emit({ type: 'unsetCheckboxFacet', payload: { type, name, value: values[0] } })
        .emit({ type: 'request' })
    }
  }

  render() {
    const { response } = this.state;
    const { i18n } = this.props.config;
    return (
      <Grid columns='12'>
        <BreadCrumbs i18n={i18n.bradCrumbs} query={query} filters={response.meta.filters} onChange={this.removeFilter}/>
        <Sorting />
        <Grid columns='4|8'>
          <Filters onChange={mobile ? this.changeFiltersMobile : this.changeFilters}>
            { response.filters.map(filter => filterMap({ filter, title: config.facets[filter.name] }))
          </Filters>
          <div>
            <Grid columns='3'>
              <Products products={response.products}/>
            </Grid>
            <Pagination  total={meta.total} current={this.getCurrentPage(meta)}/>
          </div>
        </Grid>
      </Grid>
    )
  }
}

Dom.render(<Provider config={config}/>, '#div')
*/
