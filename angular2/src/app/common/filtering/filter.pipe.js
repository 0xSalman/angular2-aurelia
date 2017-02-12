import {Pipe} from '@angular/core';

/**
 * A custom pipe that filters the provided
 * list by provided fields
 * This is used for quick client side filtering
 */

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe {
  
  transform(array, args) {
    return array.filter(item => {
      let include = true;
      for (const field of args.fields) {
        if (field.filterValue && item[field.name].toLowerCase().indexOf(field.filterValue.toLowerCase()) === -1) {
          include = false;
          break;
        }
      }
      return include;
    });
  }
}