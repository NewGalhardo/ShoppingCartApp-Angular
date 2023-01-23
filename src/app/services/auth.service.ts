import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3000/login/';

  constructor(private httpClient: HttpClient) { }

  signUp = (user: User) => this.httpClient.post(this.url + 'signup', user);

  signIn = (user: User) => this.httpClient.post<any>(this.url + 'signin', user);  
  
  persistToken = (token: string) => sessionStorage.setItem('token', token);

  getToken = () => sessionStorage.getItem('token');

  isLoggedIn = () => !!sessionStorage.getItem('token');
}
