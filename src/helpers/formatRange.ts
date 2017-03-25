import { format } from 'currency-formatter';

export default ({ from, to, config: { currency, i18n } }) => 
  from && to && `${format(from, currency)} - ${format(to, currency)}` ||
  from && !to && `${i18n.under} ${format(from, currency)}` ||
  !from && to && `${i18n.up} ${format(to, currency)}`;
