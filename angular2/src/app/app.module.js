import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BusinessComponent} from './business.component';
import {routes} from './app.routes';
import {AppComponent} from './app.component';
import {UtilModule} from './common';

/**
 * A module class which is app's starting point
 */

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    UtilModule
  ],
  declarations: [
    AppComponent,
    BusinessComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
