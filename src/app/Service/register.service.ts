import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Models/login';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  public register(register: any): Observable<string> {
    console.log(register);
    return this.http.post("https://localhost:44300/api/User/Register", register, { responseType: 'text' });
  }
}
