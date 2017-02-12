import {Pipe} from '@angular/core';

@Pipe({
  name: 'paginate',
  pure: false
})
export class PaginatePipe {
  
  transform(array, args) {
    return array.slice(args.from, args.to);
  }
}