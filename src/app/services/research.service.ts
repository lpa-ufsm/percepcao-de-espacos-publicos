import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Research } from '../research.interface';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  constructor(
    private http: HttpClient
  ) { }

  public getResearchList(): Observable<Array<Research>> {
    return this.http.get('./assets/researches.json') as Observable<Array<Research>>;
  }
}
