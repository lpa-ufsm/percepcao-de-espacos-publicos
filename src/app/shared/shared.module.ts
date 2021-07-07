import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [SafePipe],
  exports: [
    RouterModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    SafePipe,
  ]
})
export class SharedModule { }
