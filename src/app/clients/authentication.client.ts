import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationClient {
    constructor(private http: HttpClient) { }

    public login(username: string, password: string): Observable<string> {
        return this.http.post(
            environment.apiUrl + '/api/Users/login',
            {
                username: username,
                password: password,
            },
            { responseType: 'text' }
        );
    }

    public register(
        username: string,
        email: string,
        password: string
    ): Observable<string> {
        return this.http.post(
            environment.apiUrl + '/api/users/signup',
            {
                name: "Name",
                username: username,
                email: email,
                password: password,
            },
            { responseType: 'text' }
        );
    }
}