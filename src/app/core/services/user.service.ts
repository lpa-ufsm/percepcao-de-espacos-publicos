import { Injectable } from '@angular/core';

import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;

  constructor() { }

  save(user: User): void {
    this.user = user;
  }

  getUser(): User | undefined {
    return this.user;
  }

  isLoggedin(): boolean {
    return !!this.user;
  }
}
