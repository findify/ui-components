import { isArray } from 'lodash';
import { format } from 'currency-formatter';

export const getPrice = (price, currency) => {
  if (!isArray(price)) return price;

  const ddd = price;
  console.log(ddd);
  
  if (!!price.reduce((a, b) => a === b ? a : NaN )) {
    return format(price[0], currency)
  }

  return [
    format(Math.min.apply(Math,price), currency),
    format(Math.max.apply(Math,price), currency),
  ].join(' - ');
}
