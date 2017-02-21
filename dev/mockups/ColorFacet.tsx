import * as React from 'react';

const props = {
  isOpen: true,
  label: 'Colors',
  type: 'color',
  name: 'Colors',
  values: [  
    {  
      "key":"Blue",
      "count":83,
      "selected":false
    },
    {  
      "key":"Red",
      "count":75,
      "selected":false
    },
    {  
      "key":"Multicolor",
      "count":73,
      "selected":false
    },
    {  
      "key":"Yellow",
      "count":261,
      "selected":false
    }
  ]
};

export default ({ Component }) => (
  <div style={{ margin: 50, width: 400, position: 'relative' }}>
    <Component { ...props } />
  </div>
);
