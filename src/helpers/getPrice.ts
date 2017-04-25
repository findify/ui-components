import { isArray } from 'lodash';
import { format } from 'currency-formatter';

export const getPrice = (price, currency) => {
  if (!isArray(price)) return price;
  
  if (price.reduce((a, b) => a === b ? a : void 0 ) !== void 0) {
    return format(price[0], currency);
  }

  return [
    format(Math.min.apply(Math,price), currency),
    format(Math.max.apply(Math,price), currency),
  ].join(' - ');
}
