import * as React from 'react';

const props = {
  open: true,
  title: 'Kategori',
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
      "key":"Vuxen",
      "count":558,
      "selected":false
    }
  ]
};

export default ({ Component }) => (
  <div style={{ margin: 50, width: 400, height: 700, position: 'relative' }}>
    <Component { ...props } />
  </div>
);
