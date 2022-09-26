import { UsersClient } from './../clients/list_users.client';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css'],
})
export class SecretComponent implements OnInit {
  public weather: Observable<any> = this.userClient.getWeatherData();

  constructor(
    private authenticationService: AuthenticationService,
    private userClient: UsersClient
  ) { }

  ngOnInit(): void { }

  logout(): void {
    this.authenticationService.logout();
  }
}