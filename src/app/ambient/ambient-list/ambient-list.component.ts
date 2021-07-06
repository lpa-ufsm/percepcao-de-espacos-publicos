import { Component, OnInit } from '@angular/core';

import { Ambient } from '../../core/models/ambient.interface';
import { AmbientService } from '../../core/services/ambient.service';

@Component({
  selector: 'app-ambient-list',
  templateUrl: './ambient-list.component.html',
  styleUrls: ['./ambient-list.component.scss']
})
export class AmbientListComponent implements OnInit {

  ambients: Array<Ambient> = [];

  constructor(
    private ambientService: AmbientService,
  ) { }

  ngOnInit(): void {
    this.ambientService.getAmbientList().subscribe(data => {
      this.ambients = this.shuffleArray(data);
    });
  }

  shuffleArray(arr: Array<Ambient>): Array<Ambient> {
    for (let i: number = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

}
