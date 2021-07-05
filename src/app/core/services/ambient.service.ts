import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { UserService } from './user.service';
import { Ambient } from '../models/ambient.interface';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AmbientService {

  private ambients: Ambient[];

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  getAmbient(id?: number): Ambient {
    this.getAmbientList().subscribe(ambients => this.ambients = ambients);
    return this.ambients?.find(ambient => ambient.id === id);
  }

  getAmbientList(): Observable<Ambient[]> {
    return this.http.get('./assets/ambients.json') as Observable<Ambient[]>;
  }

  fillUrl(url: string): string {
    const user: User = this.userService.getUser();

    const preFilledFields: any = {
      nameInput: user.name,
      ageInput: user.age,
      specialtyInput: user.specialty ?? ''
    };
    return url.replace(/nameInput|ageInput|specialtyInput/g, match => preFilledFields[match]);
  }
}
