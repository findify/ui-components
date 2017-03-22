import * as React from 'react';
import { withFacets } from '../helpers/withFacets';

const props = {
  isOpen: true,
  label: 'Kategori',
  type: 'category',
  name: 'Kategori',
  onChange: console.log,
  config: {
    maxItemsCount: 3,
    rowHeight: 20,
    i18n: {
      goBackTitle: 'Alla kategorier',
      more: 'Show more',
      less: 'Less',
    }
  },
}

export const values = [
  {  
    "type":"category",
    "selected":false,
    "count":2864,
    "hasChildren":true,
    "value":"Hund",
    "name":"category1", 
    children: [
      {  
        "type":"category",
        "selected":false,
        "count":9,
        "hasChildren":true,
        "value":"Fågel",
        "name":"category1",
        children: [
          {  
            "type":"category",
            "selected":false,
            "count":9,
            "hasChildren":true,
            "value":"Fågel1",
            "name":"category1"
          },
          {  
            "type":"category",
            "selected":false,
            "count":4,
            "hasChildren":true,
            "value":"Reptil1",
            "name":"category1"
          },
          {  
            "type":"category",
            "selected":false,
            "count":1,
            "hasChildren":true,
            "value":"Fisk1",
            "name":"category1"
          }
        ]
      },
      {  
        "type":"category",
        "selected":false,
        "count":4,
        "hasChildren":true,
        "value":"Reptil",
        "name":"category1"
      },
      {  
        "type":"category",
        "selected":false,
        "count":1,
        "hasChildren":true,
        "value":"Fisk",
        "name":"category1"
      }
    ]
  },
  {  
    "type":"category",
    "selected":false,
    "count":398,
    "hasChildren":true,
    "value":"Katt",
    "name":"category1"
  },
  {  
    "type":"category",
    "selected":false,
    "count":389,
    "hasChildren":true,
    "value":"Veterinärfoder",
    "name":"category1"
  },
  {  
    "type":"category",
    "selected":false,
    "count":49,
    "hasChildren":true,
    "value":"Smådjur",
    "name":"category1"
  }
];

export default ({ Component }) => {
  const Base: any = withFacets(Component);
  return (
    <div style={{ margin: 50, width: 400, position: 'relative' }}>
      <Base { ...props } values={values}/>
    </div>
  );
}
