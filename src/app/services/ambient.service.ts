import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Ambient } from '../ambient.interface';
import { LoginService } from './login.service';

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
    private loginService: LoginService
  ) { }

  public getAmbientList(): Observable<Array<Ambient>> {
    return this.http.get('./assets/ambients.json') as Observable<Array<Ambient>>;
  }

  public fillUrl(url: string, ambientId: number): string {
    const preFilledFields: any = {
      nameInput: this.loginService.user.name,
      ageInput: this.loginService.user.age,
      specialtyInput: this.loginService.user.specialty ?? '',
      ambientId: ambientId.toString()
    };
    return url.replace(/nameInput|ageInput|specialtyInput|ambientId/g, match => preFilledFields[match]);
  }
}
