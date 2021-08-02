import { Component, OnInit } from '@angular/core';

import { Ambient } from '../../core/models/ambient.interface';
import { AmbientService } from '../../core/services/ambient.service';

@Component({
  selector: 'app-ambient-list',
  templateUrl: './ambient-list.component.html',
  styleUrls: ['./ambient-list.component.scss']
})
export class AmbientListComponent implements OnInit {

  ambients: Ambient[] = [];

  constructor(
    private ambientService: AmbientService,
  ) { }

  ngOnInit(): void {
    this.ambientService.getAmbientList().subscribe(data => {
      this.ambients = this.ambientService.shuffle(data);
    });
  }

}
