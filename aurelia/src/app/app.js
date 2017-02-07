import {LogManager} from 'aurelia-framework';
import {Router} from 'aurelia-router';

/**
 * A ViewModel class to configure routes
 * and acting as webapp's starting point
 */

export class App {
  
  constructor() {
    this.logger = LogManager.getLogger('app');
  }
  
  configureRouter(config, router: Router) {
    this.router = router;
    config.title = 'Aurelia ES6/ES7 + Webpack';
    config.options.pushState = true;
    config.map([
      {route: '', name: 'home', moduleId: './business-view', nav: true, title: 'Home'},
    ]);
  }
}
