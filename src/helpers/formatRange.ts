import { format } from 'currency-formatter';

export default ({ from, to, config: { currency, i18n } }) => 
  from && to && `${i18n.from} ${format(from, currency)} ${i18n.to} ${format(to, currency)}` ||
  from && !to && `${i18n.moreThan} ${format(from, currency)}` ||
  !from && to && `${i18n.lessThan} ${format(to, currency)}`;
