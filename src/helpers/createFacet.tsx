import * as React from 'react';
import {
  compose, setDisplayName, setStatic,
  branch, renderNothing, withHandlers,
  createEagerElement, renderComponent
} from 'recompose';

import { GenericFacet } from 'internals/GenericFacet';
import { genericStateMapper } from './genericStateMapper';

const createChildrenFactory = components => props =>
  components.map((component, key) => createEagerElement(component, { ...props, key }));

export const createFacet = ({
  type,
  name = 'Facet',
  wrapper = GenericFacet,
  wrapperClass: className
}: FacetCreator) =>
(...components) => {
  const children = createChildrenFactory(components);

  return compose(
    setDisplayName(name),
    setStatic('type', type),
    withHandlers({
      onChange: ({ values, onChange }: any) => (key, selected) =>
        onChange()
    }),
    branch(
      ({ isMobile }) => isMobile,
      renderComponent(props => createEagerElement('div', { className }, children(props))),
      renderComponent(props => createEagerElement(wrapper, { ...props, className }, children(props)))
    )
  )(renderNothing)
}

type FacetCreator = {
  type: string
  name?: string,
  wrapper?: React.StatelessComponent<any>,
  wrapperClass?: string
}
