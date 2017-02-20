export const valueToKey = ({ from, to }, currency) =>
  from && to && `${from} ${currency} - ${to} ${currency}` ||
  from && !to && `${from} ${currency} and more` ||
  !from && to && `less then ${to} ${currency}`;
