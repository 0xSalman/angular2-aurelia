import 'semantic-ui-css/semantic.css';
import 'semantic-ui-css';
import './styles/global.css';
import * as Bluebird from 'bluebird';

Bluebird.config({warnings: false});

/**
 * Bootstrap webapp and configure its starting point
 */

export async function configure(aurelia) {
  
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .feature('app/common');
  
  await aurelia.start().then(() => aurelia.setRoot('app/app'));
}