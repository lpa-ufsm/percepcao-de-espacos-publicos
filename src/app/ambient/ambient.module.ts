import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmbientListComponent } from './ambient-list/ambient-list.component';
import { SharedModule } from '../shared/shared.module';
import { AmbientFormComponent } from './ambient-form/ambient-form.component';
import { FinishDialogComponent } from './finish-dialog/finish-dialog.component';

@NgModule({
  declarations: [
    AmbientListComponent,
    AmbientFormComponent,
    FinishDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AmbientModule { }
