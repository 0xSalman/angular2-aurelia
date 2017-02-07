/**
 * Custom value converter that selects
 * subset of the provided list
 * by provided from and to indexes
 * this is used for quick client side pagination
 */

export class PaginateValueConverter {
  toView(array, from, to) {
    return array.slice(from, to);
  }
}