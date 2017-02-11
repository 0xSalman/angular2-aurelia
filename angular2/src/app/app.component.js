import {Component} from '@angular/core';
import {routes} from './app.routes';
import template from './app.component.html';

/**
 * A starting component class that
 * configures app's layout
 */

@Component({
  selector: 'app',
  template: template
})
export class AppComponent {
  
  constructor() {
    this.menuItems = routes;
  }
}