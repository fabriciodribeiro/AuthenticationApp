import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersClient {
  constructor(private http: HttpClient) {}

  getWeatherData(): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/users/list');
  }
}