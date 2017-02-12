import {Pipe} from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe {
  
  transform(array, args) {
    
    if (array && args.fields) {
      return array
        .slice(0)
        .sort((a, b) => {
          return args.fields
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