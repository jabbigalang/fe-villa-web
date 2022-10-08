import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resident } from './resident';
import { environment } from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class ResidentService {
  residentUrl = environment.residentServiceUrl + '/residents';

  constructor(private http: HttpClient) {}

  getResidents(): Observable<Resident[]> {
    return this.http.get<Resident[]>(this.residentUrl);
  }

  getResident(residentId: string) {
    const options = {
      params: new HttpParams().set('residentId', residentId)
    }

    return this.http.get<Resident>(this.residentUrl + '/{residentId}', options);
  }
}
