import { format } from 'currency-formatter';

export const getPrice = (price, currency) => {
  if (typeof price === 'string') return price;
  if (!!price.reduce((a, b) => a === b ? a : NaN )) {
    return format(price[0], currency)
  } else {
    return [
      format(Math.min.apply(Math,price), currency),
      format(Math.max.apply(Math,price), currency),
    ].join(' - ')
  }
}
