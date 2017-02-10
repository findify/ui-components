export const createCursor = (list, cursor) => {
  if (!list.children) return cursor;
  const index = list.children.findIndex(item => item.selected);
  if (index < 0) return cursor;
  return createCursor(list.children[index], [...cursor, index]);
};
