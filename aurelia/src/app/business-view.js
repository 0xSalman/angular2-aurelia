import {inject, LogManager} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {Business} from './business';

/**
 * A ViewModel class that fetches and displays list of businesses
 */

@inject(HttpClient)
export class BusinessView {
  
  constructor(http: HttpClient) {
    this.logger = LogManager.getLogger('business-view');
    this.http = http;
    // should be read from a config file
    this.apiUrl = 'https://zrn2cbypo9.execute-api.us-west-2.amazonaws.com';
    this.businesses = [];
    this.loading = true;
    this.sortDirection = 'asc';
    this.sortBy = 'name';
    this.sortingClass = {
      name: '',
      city: '',
      state: '',
      zipcode: ''
    };
  }
  
  // fetch data from api when view model is activated
  activate() {
    this.http.fetch(`${this.apiUrl}/TakeHome/fruit`)
      .then(response => { return response.json() })
      .then(data => {
        // this.logger.debug(data);
        for (let business of data) {
          this.businesses.push(new Business(business));
        }
        this.loading = false;
        this.sortingClass.name = 'ascending';
      })
      .catch(error => {
        this.logger.error(error);
      });
  }
  
  applySorting(sortBy) {
    // reverse sorting direction when sorting by same property
    if (sortBy === this.sortBy) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      this.sortingClass[this.sortBy] = this.sortDirection === 'asc' ? 'ascending' : 'descending';
    } else {
      this.sortDirection = 'asc';
      this.sortingClass[this.sortBy] = '';
      this.sortingClass[sortBy] = 'ascending';
    }
    this.sortBy = sortBy;
  }
}