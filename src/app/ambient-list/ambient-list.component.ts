import { Component, OnInit } from '@angular/core';

import { Ambient } from '../ambient.interface';
import { LoginService } from '../services/login.service';
import { AmbientService } from '../services/ambient.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-ambient-list',
  templateUrl: './ambient-list.component.html',
  styleUrls: ['./ambient-list.component.scss']
})
export class AmbientListComponent implements OnInit {

  ambients: Array<Ambient> = [];

  userIsLogged = false;

  user: User = {
    name: '',
    age: '',
    specialty: ''
  };

  constructor(
    private ambientService: AmbientService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.userIsLogged = this.loginService.isLoggedin;

    if (this.userIsLogged) {
      this.user = this.loginService.user;
    }

    this.ambientService.getAmbientList().subscribe(data => {
      this.ambients = this.shuffleArray(data);
    });
  }

  shuffleArray(arr: Array<Ambient>): Array<Ambient> {
    for (let i: number = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  fillUrl(url: string, ambientId: number): string {
    return this.ambientService.fillUrl(url, ambientId);
  }

  rememberAmbientClicked(r: Ambient): void {
    this.ambientService.ambientClicked = r;
  }
}
