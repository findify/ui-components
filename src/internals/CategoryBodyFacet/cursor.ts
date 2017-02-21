type Cursor = {
  cursor: number[],
  childrenCount: number,
};

export const createCursor = (list, cursor, childrenCount): Cursor => {
  if (!list.values) return { cursor, childrenCount };

  const index = list.values.findIndex(item => item.selected);
  const values = list.values[index];
  
  if (index < 0) return { cursor, childrenCount: list.values.length };
  return createCursor(values, [...cursor, index], values.length);
};
