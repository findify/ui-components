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
      lines: 3
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
        submit: 'Apply'
      }
    },

    labels: {
      'category': 'Hund',
      'custom_fields.manufacturer': 'Manufacturer',
      'price': 'Price',
      'custom_fields.hundkategori': 'Hundkategori',
      'custom_fields.livsstadium': 'Livsstadium',
      'custom_fields.rasstorlekarflerval': 'Rasstorlekarflerval',
      'custom_fields.standardnetto': 'Standardnetto',
      'custom_fields.tuggbenmaterial': 'Tuggbenmaterial',
      'custom_fields.leksaksort': 'Leksaksort',
      'custom_fields.konsistens': 'Konsistens',
      'custom_fields.leksakstorlek': 'Leksakstorlek',
      'custom_fields.matplats_storlek': 'Matplats Storlek',
      'custom_fields.koppelmaterial': 'Koppelmaterial',
      'custom_fields.tuggtyp': 'Tuggtyp',
    },
  
    i18n: {
      more: 'Show more',
      less: 'Less',
      search: 'Search',
      reset: 'Reset filter',
      showResults: 'Show results',
      hideFilters: 'Hide filters',
      backToFilters: 'Back to filters',
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
