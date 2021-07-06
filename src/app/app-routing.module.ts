import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserGuard } from './core/guards/user.guard';
import { AmbientListComponent } from './ambient/ambient-list/ambient-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    component: AmbientListComponent
  },
  {
    path: 'user',
    component: UserFormComponent
  },
  {
    path: 'ambient/:id',
    component: UserFormComponent,
    canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
