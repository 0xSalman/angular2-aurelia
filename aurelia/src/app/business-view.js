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
    this.filterBy = '';
    this.filterValue = '';
    this.sortBy = 'name';
    this.sortDirection = 'asc';
    this.columns = [
      {
        name: 'name',
        heading: 'Business Name',
        filterValue: '',
        sortDirection: 'asc',
        sortClass: '',
        sort: true,
        filter: true
      },
      {
        name: 'address',
        heading: 'Address',
        filterValue: '',
        sortDirection: '',
        sortClass: '',
        sort: false,
        filter: true
      },
      {
        name: 'city',
        heading: 'City',
        filterValue: '',
        sortDirection: '',
        sortClass: '',
        sort: true,
        filter: true
      },
      {
        name: 'state',
        heading: 'State',
        filterValue: '',
        sortDirection: '',
        sortClass: '',
        sort: true,
        filter: true
      },
      {
        name: 'zipcode',
        heading: 'Zipcode',
        filterValue: '',
        sortDirection: '',
        sortClass: '',
        sort: true,
        filter: true
      }
    ];
  }
  
  // fetch data from api when view model is activated
  activate() {
    this.http.fetch(`${this.apiUrl}/TakeHome/fruit`)
      .then(response => { return response.json() })
      .then(data => {
        // this.logger.debug(data);
        for (const business of data) {
          this.businesses.push(new Business(business));
        }
        this.loading = false;
        this.columns[0].sortClass = 'ascending';
      })
      .catch(error => {
        this.logger.error(error);
      });
  }
  
  applySorting(sortBy) {
  
    this.sortBy = sortBy;
    const colIndex = this.objectIndex(sortBy);
  
    switch (this.columns[colIndex].sortDirection) {
      case 'asc':
        this.sortDirection = 'desc';
        this.columns[colIndex].sortDirection = 'desc';
        this.columns[colIndex].sortClass = 'descending';
        break;
      case 'desc':
        this.sortDirection = '';
        this.columns[colIndex].sortDirection = '';
        this.columns[colIndex].sortClass = '';
        break;
      default:
        this.sortDirection = 'asc';
        this.columns[colIndex].sortDirection = 'asc';
        this.columns[colIndex].sortClass = 'ascending';
        break;
    }
  }
  
  applyFiltering(filterBy) {
    const colIndex = this.objectIndex(filterBy);
    this.filterBy = this.columns[colIndex].name;
    this.filterValue = this.columns[colIndex].filterValue;
  }
  
  objectIndex(prop) {
    return this.columns.findIndex(col => col.name === prop);
  }
}