export class App {
  
  configureRouter(config, router) {
    
    this.router = router;
    config.title = 'Aurelia ES6/ES7 + Webpack';
    config.map([
      {route: '', name: 'home', moduleId: './home', nav: true, title: 'Home'},
    ]);
  }
}
