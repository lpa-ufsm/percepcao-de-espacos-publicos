import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

import { Ambient } from 'src/app/core/models/ambient.interface';
import { AmbientService } from 'src/app/core/services/ambient.service';
import { FormSheetComponent } from 'src/app/form/form-sheet/form-sheet.component';
import { FinishDialogComponent } from '../finish-dialog/finish-dialog.component';

@Component({
  selector: 'app-ambient-form',
  templateUrl: './ambient-form.component.html',
  styleUrls: ['./ambient-form.component.scss']
})
export class AmbientFormComponent implements OnInit {

  ambient: Ambient;

  constructor(
    private ambientService: AmbientService,
    private route: ActivatedRoute,
    private bottomSheet: MatBottomSheet,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params.id);
    this.ambientService.getAmbient(id).pipe(take(1)).subscribe(ambient => {
      this.ambient = ambient;
      this.ambientService.updateViewedAmbients(ambient.id);
    });
  }

  openForm(): void {
    this.bottomSheet.open(FormSheetComponent, { data: this.ambient });
  }

  next(): void {
    this.ambientService.allAmbientsViewed().subscribe(viewed => {
      if (viewed) {
        this.showFinishDialog();
      } else {
        this.showNextAmbient();
      }
    });
  }

  private showFinishDialog(): void {
    this.dialog.open(FinishDialogComponent);
  }

  private showNextAmbient(): void {
    this.ambientService.getAmbientList()
    .pipe(take(1))
    .subscribe(data => {

      const ambients = this.ambientService.shuffle(data);

      const ambient = ambients[0];

      if (!this.ambientService.ambientIsNew(ambient.id)) {
        this.next();
        return;
      }

      this.ambient = ambient;
      this.ambientService.updateViewedAmbients(ambient.id);
    });
  }

}
