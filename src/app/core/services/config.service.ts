import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public static ApiBaseUrl: string = "http://localhost:51343/api/"
  constructor() { }
}
