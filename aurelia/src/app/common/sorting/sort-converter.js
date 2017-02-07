/**
 * A custom converter that sorts the provided
 * list by provided field and in provided direction
 * This is used for quick client side sorting
 */

export class SortValueConverter {
  toView(array, propertyName, direction) {
    const factor = direction === 'asc' ? 1 : -1;
    return array
      .slice(0)
      .sort((a, b) => {
        const v1 = a[propertyName];
        const v2 = b[propertyName];
        return (v1 < v2 ? -1 : +(v1 > v2)) * factor
      });
  }
}