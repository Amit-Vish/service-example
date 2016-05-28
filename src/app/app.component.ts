import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

import { APP_PROVIDERS } from './app.providers';

@Component({ 
  moduleId: module.id,
  selector: 'app',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [ APP_PROVIDERS ]
})
@Routes([
  
])
export class AppComponent {
  
  constructor(private router: Router) {

  }
  
}
