import 'font-awesome/css/font-awesome.css';
import './styles/global.css';
import * as Bluebird from 'bluebird';
Bluebird.config({warnings: false});

export async function configure(aurelia) {
  
  aurelia.use
    .standardConfiguration()
    .developmentLogging();
  
  await aurelia.start().then(() => aurelia.setRoot('app/app'));
}