import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

export interface LoginResult {
  isSuccess: boolean,
  message: string
}
export interface LoginInput {
  username: string,
  password: string,
  remeberMe: boolean
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  result: LoginResult;

  constructor(private http: HttpClient) { }

  login(input: LoginInput): Observable<LoginResult> {
    return this.http.post<LoginResult>(ConfigService.ApiBaseUrl + "login", input);
  }

}
