import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// import {bootloader} from '@angularclass/hmr';
import {AppModule} from './app/app.module';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'font-awesome/css/font-awesome.css';
import './styles/global.css';

/**
 * Bootstrap webapp and configure how to load the starting module
 */

export function main() {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}

/*if (process.env.ENV === 'production') {
 enableProdMode();
 if (document.readyState === 'complete') {
 main();
 } else {
 document.addEventListener('DOMContentLoaded', main);
 }
 } else {
 bootloader(main);
 }*/

if (process.env.ENV === 'production') {
  enableProdMode();
}

if (document.readyState === 'complete') {
  main();
} else {
  document.addEventListener('DOMContentLoaded', main);
}
