import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitizenIdService {

  constructor(private http: HttpClient) { }

  checkCitizenId(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiHost}/verify-citizen-id`, data);
  }
}
