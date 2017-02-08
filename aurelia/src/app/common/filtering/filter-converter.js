/**
 * A custom converter that filters the provided
 * list by provided fields
 * This is used for quick client side filtering
 */

export class FilterValueConverter {
  
  toView(array, fields) {
    return array.filter(item => {
      let include = true;
      for (const field of fields) {
        if (field.filterValue && item[field.name].toLowerCase().indexOf(field.filterValue.toLowerCase()) === -1) {
          include = false;
          break;
        }
      }
      return include;
    });
  }
}