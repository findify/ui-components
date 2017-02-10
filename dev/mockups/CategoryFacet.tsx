import * as React from 'react';

const props = {
  isOpen: true,
  title: 'Kategori',
  values: [  
    {  
      "type":"category",
      "selected":false,
      "count":2864,
      "hasChildren":true,
      "key":"Hund",
      "name":"category1", 
      children: [
        {  
          "type":"category",
          "selected":false,
          "count":9,
          "hasChildren":true,
          "key":"Fågel",
          "name":"category1",
          children: [
            {  
              "type":"category",
              "selected":false,
              "count":9,
              "hasChildren":true,
              "key":"Fågel1",
              "name":"category1"
            },
            {  
              "type":"category",
              "selected":false,
              "count":4,
              "hasChildren":true,
              "key":"Reptil1",
              "name":"category1"
            },
            {  
              "type":"category",
              "selected":false,
              "count":1,
              "hasChildren":true,
              "key":"Fisk1",
              "name":"category1"
            }
          ]
        },
        {  
          "type":"category",
          "selected":false,
          "count":4,
          "hasChildren":true,
          "key":"Reptil",
          "name":"category1"
        },
        {  
          "type":"category",
          "selected":false,
          "count":1,
          "hasChildren":true,
          "key":"Fisk",
          "name":"category1"
        }
      ]
    },
    {  
      "type":"category",
      "selected":false,
      "count":398,
      "hasChildren":true,
      "key":"Katt",
      "name":"category1"
    },
    {  
      "type":"category",
      "selected":false,
      "count":389,
      "hasChildren":true,
      "key":"Veterinärfoder",
      "name":"category1"
    },
    {  
      "type":"category",
      "selected":false,
      "count":49,
      "hasChildren":true,
      "key":"Smådjur",
      "name":"category1"
    }
  ]
};

export default ({ Component }) => (
  <div style={{ margin: 50, width: 400, position: 'relative' }}>
    <Component { ...props } />
  </div>
);
