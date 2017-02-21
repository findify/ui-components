import * as React from 'react';

const props = {
  isOpen: true,
  label: 'Checkbox',
  type: 'checkbox',
  name: 'Checkbox',
  onChange: console.log,
  config: {
    maxItemsCount: 3,
    rowHeight: 20,
    i18n: {
      search: 'Search',
      more: 'Show more',
      less: 'Less',
    }
  },
  values: [  
    {  
      "key":"Aktiv",
      "count":83,
      "selected":false
    },
    {  
      "key":"Light & Steriliserad",
      "count":75,
      "selected":false
    },
    {  
      "key":"Mature & Senior",
      "count":73,
      "selected":false
    },
    {  
      "key":"Valp & Junior",
      "count":261,
      "selected":false
    },
    {  
      "key":"Vuxen1",
      "count":558,
      "selected":false
    },
       {  
      "key":"Aktiv1",
      "count":83,
      "selected":false
    },
    {  
      "key":"Light & Steriliserad1",
      "count":75,
      "selected":false
    },
    {  
      "key":"Mature & Senior1",
      "count":73,
      "selected":false
    },
    {  
      "key":"Valp & Junior1",
      "count":261,
      "selected":false
    },
    {  
      "key":"Vuxen2",
      "count":558,
      "selected":false
    }
  ]
};

export default ({ Component }) => (
  <div style={{ margin: 50, width: 400, position: 'relative' }}>
    <Component { ...props } />
  </div>
);
