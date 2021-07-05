import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';

import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [SafePipe],
  exports: [
    RouterModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    SafePipe
  ]
})
export class SharedModule { }
