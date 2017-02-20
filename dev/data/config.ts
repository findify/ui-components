export default {
  results: {
    columns: 3,
  },

  productsGrid: {
    columns: 3
  },

  product: {
    currency: 'USD',
    image: {
      query: {}
    },
    title: {
      lines: 3,
    },
    description: {
      lines: 5
    }

  },

  productsCarousel: {
    productsToShow: 5,
  },

  sorting: {
    i18n: {
      title: 'Sort by:',
      options: {
        relevant: 'Best match',
        priceAZ: 'Price: lowest first',
        priceZA: 'Price: highest first'
      }
    }
  },

  autocomplete: {
    direction: 'ltr',
    i18n: {
      suggestionsTitle: '...',
      productMatchesTitle: '...',
      tipTitle: '...',
    }
  },

  facets: {
    range: {
      currency: 'USD',
      i18n: {
        go: 'Apply'
      }
    },

    labels: {
      key: 'label',
      key2: 'label',
      key3: 'label',
      key4: 'label',
    },
  
    i18n: {
      more: 'Show more',
      less: 'Less',
      search: 'Search',
      reset: 'Reset filter',
      showResults: 'Show results',
      hideFilters: 'Hide filters',
      ok: 'Apply',
    }
  },

  pagination: {
    i18n: {
      previous: 'previous',
      next: 'next'
    }
  },

  breadcrumbs: {
    i18n: {
      title: 'Showing ${ total } results for ${ query }:',
    }
  }
}
