import * as React from 'react';
import { setDisplayName } from 'recompose';


export const DesktopFacetsList = setDisplayName('DesktopFacetsList')
(({ children, onChange, config }: DesktopFacetsListType) => (
  <div>
    { 
      React.Children.map(children, (child: any) =>
        React.cloneElement(child, {
          onChange,
          config: config[child.props.type],
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
