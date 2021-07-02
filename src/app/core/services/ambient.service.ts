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

  ambientClicked: Ambient = {
    title: '',
    id: 0,
    iFrameUrl: '',
    formUrl: ''
  };

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  public getAmbientList(): Observable<Array<Ambient>> {
    return this.http.get('./assets/ambients.json') as Observable<Array<Ambient>>;
  }

  public fillUrl(url: string, ambientId: number): string {
    const user: User = this.userService.getUser();

    const preFilledFields: any = {
      nameInput: user.name,
      ageInput: user.age,
      specialtyInput: user.specialty ?? '',
      ambientId: ambientId.toString()
    };
    return url.replace(/nameInput|ageInput|specialtyInput|ambientId/g, match => preFilledFields[match]);
  }
}
