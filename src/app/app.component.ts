import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart';

  constructor(private service: AuthService, private router: Router) { }

  isLoggedIn = () => this.service.isLoggedIn();  

  logOut = () => {
    sessionStorage.removeItem('token');

    this.router.navigate(['signin']);
  }
}
