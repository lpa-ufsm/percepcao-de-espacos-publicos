import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSheetComponent } from './form-sheet/form-sheet.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [

    FormSheetComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FormModule { }
