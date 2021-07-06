import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../core/models/user.interface';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {

  user: User = {} as User;

  constructor(
    private userService: UserService,
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.userService.save(this.user);

    this.route.navigate(['ambient', 1]);
  }
}
