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
      })
      .catch(error => {
        this.logger.error(error);
      });
  }
}