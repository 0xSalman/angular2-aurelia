/**
 * Custom value converter that filters out displayable data
 * for pagination
 */

export class PaginateValueConverter {
  toView(array, from, to) {
    return array.slice(from, to);
  }
}