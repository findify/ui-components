import { ColorFacet } from 'widgets/ColorFacet';
import { CheckboxFacet } from 'widgets/CheckboxFacet';
import { CategoryFacet } from 'widgets/CategoryFacet';
import { RangeFacet } from 'widgets/RangeFacet';

import { createEagerFactory } from 'recompose';

export const mapTypeToFacet = (config?: any, type?: string) => ({
  category: createEagerFactory(CategoryFacet),
  text: createEagerFactory(CheckboxFacet),
  range: createEagerFactory(RangeFacet),
  color: createEagerFactory(ColorFacet)
}[config && config.type || type]);
