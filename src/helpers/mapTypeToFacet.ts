import { ColorFacet } from 'widgets/ColorFacet';
import { CheckboxFacet } from 'widgets/CheckboxFacet';
import { CategoryFacet } from 'widgets/CategoryFacet';
import { RangeFacet } from 'widgets/RangeFacet';
import { memoize } from 'lodash';

import { createEagerFactory } from 'recompose';

export const mapTypeToFacet = memoize((type: string) => ({
  category: createEagerFactory(CategoryFacet),
  text: createEagerFactory(CheckboxFacet),
  range: createEagerFactory(RangeFacet),
  color: createEagerFactory(ColorFacet)
}[type]));
