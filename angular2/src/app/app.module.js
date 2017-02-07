import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HomeComponent} from './home.component';
import {routes} from './app.routes';
import {AppComponent} from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    routes
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
