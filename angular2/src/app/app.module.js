import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {BusinessComponent} from './business.component';
import {routes} from './app.routes';
import {AppComponent} from './app.component';

/**
 * A module class which is app's starting point
 */

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  declarations: [
    AppComponent,
    BusinessComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
