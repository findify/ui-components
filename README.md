# Findify UI Components

## Widgets

### `ProductsCarousel`

	Property	|	Type    |	Required  | Default   |	Description
:-----------|:--------|:----------|:----------|:-----------
`products`  | Array   | *true*     | -        | Array of products
`component` | React.Component | *true* | -    | Component which will be rendered in carousel
`productsToShow` | number| false | 5          | Number of visible products
`title`     | string | false | -              | Carousel title

## Layouts
Prebuilt component sets which render default Findify layouts

### `ProductsLayout`

List of products

	Property	|	Type    |	Required  | Default   |	Description
:-----------|:--------|:----------|:----------|:-----------
`products`  | Array   | *true*     | -        | Array of products
`component` | React.Component | *true* | -    | Product Component
`className` | string | false | -              | Extra class name for list wrapper component
`itemClassName` | string | false | -          | Additional className, which will be appended to every item wrapper in list
