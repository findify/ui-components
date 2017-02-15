# Findify UI Components

## Widgets

### `ProductsCarousel`

	Property	|	Type    |	Required  | Default   |	Description
:-----------|:--------|:----------|:----------|:-----------
`products`  | Array   | *true*     | -        | Array of products
`component` | React.Component | false | Product    | Component which will be rendered in carousel
`productsToShow` | number| false | 5          | Number of visible products
`title`     | string | false | -              | Carousel title

### `ProductsGrid`

	Property	|	Type    |	Required  | Default   |	Description
:-----------|:--------|:----------|:----------|:-----------
`products`  | Array   | *true*     | -        | Array of products
`component` | React.Component | false | Product    | Product Component
`className` | string | false | -              | Extra className for list wrapper component
`itemClassName` | string | false | -          | Additional className, which will be appended to every item wrapper in list

### `Product`

	Property	|	Type    |	Required  | Default   |	Description
:-----------|:--------|:----------|:----------|:-----------
`url`  | string   | *true*     | -        | Link to product
`image`  | string   | *true*     | -        | Image URL
`imageQuery`  | object   | false     | -        | Additional query which will be added to Image URL
`title`  | string   | false     | -        | Product title
`description`  | string   | false     | -        | Product description
`reviews`  | number   | false     | -        | Number of reviews
`price`  | string   | false     | -        | Product price
`oldPrice`  | string   | false     | -        | This string will be added after price and have line-through style
`onClick`  | function(product)   | false     | -        | If present, will be called on click by product

### `Rating`

	Property	|	Type    |	Required  | Default   |	Description
:-----------|:--------|:----------|:----------|:-----------
`value`  | number   | *true*     | -        | Value 1-5 with step 0.5
`count`  | number   | *true*     | -        | Number of reviews

### `Pagination`

	Property	|	Type    |	Required  | Default   |	Description
:-----------|:--------|:----------|:----------|:-----------
`current`  | number   | *true*     | -        | Current page
`total`  | number   | *true*     | -        | Total pages count
`step`  | number   | false     | 2       | Number of pages near active
`onChange`  | function   | *true*     | -      | Callback function with new page as parameter
`i18n`  | object   | false     | [i18n](#i18n)       | Translation for 'prev' and 'next' buttons

### `Sorting`

	Property	|	Type    |	Required  | Default   |	Description
:-----------|:--------|:----------|:----------|:-----------
`value`  | string   | false     | -        | Selected sort
`title`  | string   | false     | -        | Text before dropdown
`options`  | Array   | *true*     | -        | Available options
`onChange`  | function   | *true*     | -      | Callback function with option as parameter
`i18n`  | object   | false     | [i18n](#i18n)       | Translation for each option

### `Grid`

	Property	|	Type    |	Required  | Default   |	Description
:-----------|:--------|:----------|:----------|:-----------
`columns`  | string   | *true*     | -        | String of columns sized separated by `|`. If just one present, then all children will will have this sized
`children`  | React.Children   | *true*     | -        | Children which will be wrapped
`className`  | string   | false     | -        | Additional className to wrapper component

> You can pass `columnClass` to children element in Grid, this string will be added to column wrapper
