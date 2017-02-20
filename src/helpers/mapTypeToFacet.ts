import { ColorFacet } from 'widgets/ColorFacet';
import { CheckboxFacet } from 'widgets/CheckboxFacet';
import { CategoryFacet } from 'widgets/CategoryFacet';
import { RangeFacet } from 'widgets/RangeFacet';

import { createEagerFactory } from 'recompose';

export const mapTypeToFacet = (type: string) => ({
  category: createEagerFactory(CategoryFacet),
  terms: createEagerFactory(CheckboxFacet),
  range: createEagerFactory(RangeFacet),
  color: createEagerFactory(ColorFacet)
}[type]);
