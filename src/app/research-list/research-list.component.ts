import { Component, OnInit } from '@angular/core';
import { Research } from '../research.interface';
import { ResearchService } from '../services/research.service';

@Component({
  selector: 'app-research-list',
  templateUrl: './research-list.component.html',
  styleUrls: ['./research-list.component.scss']
})
export class ResearchListComponent implements OnInit {

  researches: Array<Research> = [];

  constructor(
    private appSettingsService: ResearchService
  ) { }

  ngOnInit(): void {
    this.appSettingsService.getResearchList().subscribe(data => {
      this.researches = this.shuffleArray(data);
    });
  }

  shuffleArray(arr: Array<Research>): Array<Research> {
    for (let i: number = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
