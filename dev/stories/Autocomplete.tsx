import * as React from 'react';
import { Autocomplete } from '../../src/widgets/Autocomplete';
import { withKnobs, text, boolean, number, select } from '@kadira/storybook-addon-knobs';
const { storiesOf, action } = require('@kadira/storybook');
const product = require('../data/raw.json').items[0];
const suggestions = require('../data/autocomplete.json').suggestions;
const items = require('../data/autocomplete.json').items;

storiesOf('Autocomplete', module)
  .addDecorator(withKnobs)
  .addWithInfo('Desktop', () => {
    const config = {
      direction: select('Direction', {
        ltr: 'ltr',
        rtl: 'rtl'
      }, 'ltr'),
      i18n: {
        suggestionsTitle: text('Suggestions title', 'Search suggestions'),
        productMatchesTitle: text('Products title', 'Product matches'),
        tipTitle: text('Tip title', 'Press enter to search'),
      },
    };
  
    return (
      <Autocomplete
        query={text('meta.query', 'fru')}
        suggestions={suggestions}
        items={items}
        onTipClick={action('Click on Tip')}
        onSearchSuggestionClick={action('Click on suggestion')}
        config={config}
        />
    )
  })

  .addWithInfo('Mobile', () => {
    const config = {
      direction: select('Direction', {
        ltr: 'ltr',
        rtl: 'rtl'
      }, 'ltr'),
      i18n: {
        suggestionsTitle: text('Suggestions title', 'Search suggestions'),
        productMatchesTitle: text('Products title', 'Product matches'),
        tipTitle: text('Tip title', 'Press enter to search'),
      },
    };
  
    return (
      <Autocomplete
        query={text('meta.query', 'fru')}
        suggestions={suggestions}
        isMobile
        items={items}
        onTipClick={action('Click on Tip')}
        onSearchSuggestionClick={action('Click on suggestion')}
        config={config}
        />
    )
  })

  .addWithInfo('Small mobile', () => {
    const config = {
      direction: select('Direction', {
        ltr: 'ltr',
        rtl: 'rtl'
      }, 'ltr'),
      i18n: {
        suggestionsTitle: text('Suggestions title', 'Search suggestions'),
        productMatchesTitle: text('Products title', 'Product matches'),
        tipTitle: text('Tip title', 'Press enter to search'),
      },
    };
  
    return (
      <Autocomplete
        query={text('meta.query', 'fru')}
        suggestions={suggestions}
        isMobile
        isMobileSimple
        items={items}
        onTipClick={action('Click on Tip')}
        onSearchSuggestionClick={action('Click on suggestion')}
        config={config}
        />
    )
  })
