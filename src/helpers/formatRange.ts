import { format } from 'currency-formatter';
import { unescape } from 'lodash';

export default ({ from, to, config: { currency, i18n } }) => 
  from && to && `${format(from, currency)} - ${format(to, currency)}` ||
  from && !to && `${unescape(i18n.up)} ${format(from, currency)}` ||
  !from && to && `${unescape(i18n.under)} ${format(to, currency)}`;
