import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Resident} from "./resident.interface";
import {environment} from "../../environments/environment";

@Injectable()
export class ResidentService {

  residentUrl = environment.residentServiceUrl + '/residents'

  constructor(
    private http: HttpClient
  ) {
  }

  getResidents(): Observable<Resident[]> {
    return this.http.get<Resident[]>(this.residentUrl);
  }
}
