import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Ambient } from 'src/app/core/models/ambient.interface';
import { AmbientService } from 'src/app/core/services/ambient.service';

@Component({
  selector: 'app-form-sheet',
  templateUrl: './form-sheet.component.html',
  styleUrls: ['./form-sheet.component.scss']
})
export class FormSheetComponent implements OnInit {

  url: string;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) private ambient: Ambient,
    private ambientService: AmbientService,
  ) { }

  ngOnInit(): void {
    this.url = this.ambientService.fillUrl(this.ambient.formUrl);
  }

}
