import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

import { APP_PROVIDERS } from './app.providers';
import { LoginComponent } from "./login/login.component";
import { ApiService } from './shared/services/api.service';

@Component({ 
  moduleId: module.id,
  selector: 'next-tier',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [ APP_PROVIDERS, ApiService ]
})
@Routes([
    { path: '/', component: LoginComponent }
])
export class AppComponent {
  
  constructor(private router: Router) {

  }
  
}
