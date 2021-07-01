import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../services/login.service';
import { AmbientService } from '../services/ambient.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {

  model: User = {
    name: '',
    age: '',
    specialty: ''
  };

  constructor(
    private loginService: LoginService,
    private ambientService: AmbientService,
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.loginService.user = this.model;
    this.loginService.login();

    const ambient = this.ambientService.ambientClicked;
    window.open(this.ambientService.fillUrl(ambient.formUrl, ambient.id), '_blank');
    this.route.navigate(['']);

    // this.route.navigate(['ambient-form']);
  }
}
