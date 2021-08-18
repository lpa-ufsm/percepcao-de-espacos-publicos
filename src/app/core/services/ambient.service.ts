import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserService } from './user.service';
import { Ambient } from '../models/ambient.interface';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AmbientService {

  private viewedAmbients: Ambient['id'][] = [];

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  ambientIsNew(id: number): boolean {
    if (this.viewedAmbients.includes(id)) {
      return false;
    }
    return true;
  }

  updateViewedAmbients(id: number): void {
    this.viewedAmbients.push(id);
  }

  allAmbientsViewed(): Observable<boolean> {
    return this.getAmbientList().pipe(map(ambients => {
      return ambients.every(ambient => this.viewedAmbients.includes(ambient.id));
    }));
  }

  getAmbient(id: number): Observable<Ambient> {
    return this.getAmbientList().pipe(map(ambients => ambients.find(ambient => ambient.id === id)));
  }

  getAmbientList(): Observable<Ambient[]> {
    return this.http.get('./assets/ambients.json') as Observable<Ambient[]>;
  }

  fillUrl(url: string): string {
    const user: User = this.userService.getUser();

    const preFilledFields: any = {
      name: user.name,
      age: user.age,
      specialty: user.specialty ?? ''
    };
    return url.replace(/name|age|specialty/g, match => preFilledFields[match]);
  }

  shuffle(arr: Ambient[]): Ambient[] {
    for (let i: number = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
