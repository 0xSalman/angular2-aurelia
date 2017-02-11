/**
 * A model class for a business
 */

export class Business {
  
  constructor(data) {
    // Object.assign(this, data);
    this.name = data.business || data.farm_name || '';
    this.farmName = data.farm_name;
    this.category = data.category;
    this.id = data.farmer_id;
    this.item = data.item;
    this.l = data.l;
    this.location = data.location_1;
    this.address = data.location_1_location || '';
    this.city = data.location_1_city || '';
    this.state = data.location_1_state || '';
    this.zipcode = data.zipcode || '';
  }
  
}