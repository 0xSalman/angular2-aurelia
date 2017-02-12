import {Pipe} from '@angular/core';

/**
 * Custom pipe that selects
 * subset of the provided list
 * by provided from and to indexes
 * this is used for quick client side pagination
 */


@Pipe({
  name: 'paginate',
  pure: false
})
export class PaginatePipe {
  
  transform(array, args) {
    return array.slice(args.from, args.to);
  }
}