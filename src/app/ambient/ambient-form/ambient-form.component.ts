import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute, Router } from '@angular/router';

import { take } from 'rxjs/operators';

import { Ambient } from 'src/app/core/models/ambient.interface';
import { AmbientService } from 'src/app/core/services/ambient.service';
import { FormSheetComponent } from 'src/app/form/form-sheet/form-sheet.component';

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
    private router: Router,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params.id);
    this.ambientService.getAmbient(id).pipe(take(1)).subscribe(ambient => this.ambient = ambient);
  }

  openForm(): void {
    this.bottomSheet.open(FormSheetComponent, { data: this.ambient });
  }

  next(): void {
    this.ambientService.getAmbientList()
    .pipe(take(1))
    .subscribe(data => {

      const ambients = this.ambientService.shuffle(data);

      const ambient = ambients[0];

      if (ambient.id === this.ambient.id) {
        this.next();
        return;
      }

      this.ambient = ambient;
    });
  }

}
