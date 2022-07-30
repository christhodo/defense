import { Component } from '@angular/core';
import { AuthGuardService } from '@defense-angular/core-data';

@Component({
  selector: 'defense-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '';

  links = [{ path: '/receivers', icon: 'view_list', title: 'Defenses' }];

  userIsAuthenticated = this.authService.isAuthenticated;
  constructor(private authService: AuthGuardService) {}
}
