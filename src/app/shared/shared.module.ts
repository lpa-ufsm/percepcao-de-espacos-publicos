import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  exports: [
    RouterModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ]
})
export class SharedModule { }
