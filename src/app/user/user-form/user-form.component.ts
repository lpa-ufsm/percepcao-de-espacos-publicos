import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.userService.save(this.user);

    const id = this.route.snapshot.queryParamMap.get('ambient');
    this.router.navigate(['ambient', id]);
  }
}
