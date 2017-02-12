import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Business} from './business';
import 'rxjs/add/operator/map';
import template from './business.component.html';

/**
 * Component that fetches and displays list of businesses
 */

@Component({
  selector: 'business',
  template: template
})
export class BusinessComponent {
  
  constructor(http: Http) {
    this.http = http;
    this.apiUrl = 'https://zrn2cbypo9.execute-api.us-west-2.amazonaws.com';
    this.columns = [
      {
        name: 'name',
        heading: 'Business Name',
        filterValue: '',
        sortDirection: 'asc',
        sortClass: 'fa-sort-amount-asc',
        sort: true,
        filter: true
      },
      {
        name: 'address',
        heading: 'Address',
        filterValue: '',
        sortDirection: '',
        sortClass: 'fa-sort',
        sort: false,
        filter: true
      },
      {
        name: 'city',
        heading: 'City',
        filterValue: '',
        sortDirection: '',
        sortClass: 'fa-sort',
        sort: true,
        filter: true
      },
      {
        name: 'state',
        heading: 'State',
        filterValue: '',
        sortDirection: '',
        sortClass: 'fa-sort',
        sort: true,
        filter: true
      },
      {
        name: 'zipcode',
        heading: 'Zipcode',
        filterValue: '',
        sortDirection: '',
        sortClass: 'fa-sort',
        sort: true,
        filter: true
      }
    ];
    this.businesses = [];
    this.loading = true;
  }
  
  ngOnInit() {
    this.http.get(`${this.apiUrl}/TakeHome/fruit`)
      .map(response => response.json())
      .catch(error => console.log(error))
      .subscribe(data => {
        for (const business of data) {
          this.businesses.push(new Business(business));
        }
        this.loading = false;
      });
  }
  
  applySorting(sortBy) {
    
    // this.sortBy = sortBy;
    const colIndex = this.objectIndex(sortBy);
    
    if (this.columns[colIndex].sort) {
      switch (this.columns[colIndex].sortDirection) {
        case 'asc':
          // this.sortDirection = 'desc';
          this.columns[colIndex].sortDirection = 'desc';
          this.columns[colIndex].sortClass = 'fa-sort-amount-desc';
          break;
        case 'desc':
          // this.sortDirection = '';
          this.columns[colIndex].sortDirection = '';
          this.columns[colIndex].sortClass = 'fa-sort';
          break;
        default:
          // this.sortDirection = 'asc';
          this.columns[colIndex].sortDirection = 'asc';
          this.columns[colIndex].sortClass = 'fa-sort-amount-asc';
          break;
      }
    }
  }
  
  objectIndex(prop) {
    return this.columns.findIndex(col => col.name === prop);
  }
}