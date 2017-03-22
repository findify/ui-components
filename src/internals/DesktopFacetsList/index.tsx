import * as React from 'react';
import { setDisplayName } from 'recompose';
import { merge } from 'lodash';


export const DesktopFacetsList = setDisplayName('DesktopFacetsList')
(({ children, onChange, config }: DesktopFacetsListType) => (
  <div>
    { 
      React.Children.map(children, (child: any) =>
        React.cloneElement(child, {
          onChange,
          label: config.labels[child.props.name]
        })
      )
    }
  </div>
));

type DesktopFacetsListType = {
  children: any[],
  onChange: void,
  config: any
};
