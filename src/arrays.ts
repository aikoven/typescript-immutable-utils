export function setAt<T>(items: T[], index: number, item: T): T[] {
  if (items[index] === item)
    return items;

  const newItems = [...items];
  newItems[index] = item;
  return newItems;
}


export function insertAt<T>(items: T[], index: number, item: T): T[] {
  const newItems = [...items];
  newItems.splice(index, 0, item);
  return newItems;
}


export function removeAt<T>(items: T[], index: number): T[] {
  const newItems = [...items];
  const deleted = newItems.splice(index, 1);
  return deleted.length === 0 ? items : newItems;
}


export function removeValue<T>(items: T[], item: T): T[] {
  const index = items.indexOf(item);

  return index === -1 ? items : removeAt(items, index);
}
