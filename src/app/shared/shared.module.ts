import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SafePipe } from './pipes/safe.pipe';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [SafePipe, HeaderComponent],
  exports: [
    RouterModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    SafePipe,
    MatBottomSheetModule,
    HeaderComponent
  ]
})
export class SharedModule { }
