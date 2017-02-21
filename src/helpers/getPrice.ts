import { format as currencyFormat } from 'currency-formatter';

export const getPrice = (price, currency) => {
  if (typeof price === 'string') return price;
  if (!!price.reduce((a, b) => a === b ? a : NaN )) {
    return currencyFormat(price[0], { code: currency })
  } else {
    return [
      currencyFormat(Math.min.apply(Math,price), { code: currency }),
      currencyFormat(Math.max.apply(Math,price), { code: currency }),
    ].join(' - ')
  }
}
