import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AuthGuard } from './guards/auth.guard';
import { AmbientListComponent } from './ambient-list/ambient-list.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    component: AmbientListComponent
  },
  {
    path: 'user-form',
    component: UserFormComponent
  },
  // {
  //   path: 'ambient-form',
  //   component: AmbientFormComponent,
  //   canActivate: [AuthGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
