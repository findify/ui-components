import * as React from 'react';
import { setDisplayName } from 'recompose';


export const DesktopFacetsList = setDisplayName('DesktopFacetsList')
(({ children, onChange }: DesktopFacetsListType) => (
  <div>
    { 
      React.Children.map(children, (child: any) => React.cloneElement(child, { onChange }))
    }
  </div>
));

type DesktopFacetsListType = {
  children: any[],
  onChange: void
};
