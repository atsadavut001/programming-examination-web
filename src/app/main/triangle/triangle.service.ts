import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TriangleService {

  constructor(private http: HttpClient) { }

  calculateTriangle(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiHost}/triangle`, data);
  }
}
