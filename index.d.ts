declare module "@findify/findify-ui-components" {
  type AutocompleteWidgetProps = {
    query: string,
    searchSuggestions: string[],
    onSearchSuggestionClick: (query: string) => void,
    productMatches?: AutocompleteWidgetProductProp[],
    onTipClick?: () => void,
    direction?: string,
    suggestionsTitle?: string,
    productMatchesTitle?: string,
    tipTitle?: string,
  };
  type AutocompleteWidgetProductProp = {
    link: string,
    imageLink: string,
    title: string,
    price: string,
    discountPrice?: string,
    reviewsCount?: number,
    rating?: number,
  };
}
