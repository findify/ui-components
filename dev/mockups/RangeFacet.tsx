import * as React from 'react';

const props = {
  isOpen: true,
  title: 'Range',
  min: 1,
  max: 20,
  values: [  
    {
      "count":83,
      "selected":false,
      from: 10,
      to: 20,
    },
    {
      "count":75,
      "selected":false,
      from: 30
    },
    {
      "count":73,
      "selected":false,
      to: 10
    }
  ]
};

export default ({ Component }) => (
  <div style={{ margin: 50, width: 400, position: 'relative' }}>
    <Component { ...props } />
  </div>
);
