import { Injectable } from '@angular/core';
import { User } from '../user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User = {
    name: '',
    age: '',
    specialty: ''
  };

  isLoggedin = false;

  constructor() { }

  login(): void {
    this.isLoggedin = true;
  }
}
