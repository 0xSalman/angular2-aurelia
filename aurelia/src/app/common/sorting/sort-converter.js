/**
 * A custom converter that sorts the provided
 * list by provided fields and their sort direction
 * This is used for quick client side sorting
 */

export class SortValueConverter {
  
  toView(array, fields) {
    if (array && fields) {
      return array
        .slice(0)
        .sort((a, b) => {
          return fields
            .map(o => {
              if (o.sortDirection) {
                const factor = o.sortDirection === 'asc' ? 1 : -1;
                const v1 = a[o.name].toLowerCase();
                const v2 = b[o.name].toLowerCase();
                return (v1 < v2 ? -1 : +(v1 > v2)) * factor
              }
              return 0;
            })
            .reduce((p, n) => {
              return p ? p : n;
            }, 0);
        });
    }
    
    return array;
  }
}