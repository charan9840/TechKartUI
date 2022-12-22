import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Login } from '../Models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  public Login(login: Login): Observable<string> {
    return this.http.post("https://localhost:44300/api/Authentication/Login", login, { responseType: 'text' });
  }
  public getAuthStatus() {
    let result: any = localStorage.getItem('AuthToken');

    if (result == null) {
      return false;
    }
    else {
      return true;
    }
  
  }
  role = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"


  isAdmin() {
    let result: any = localStorage.getItem('AuthToken');
    if (result == null)
      return false;
    let jwt = new JwtHelperService()
    let DecodedToken = jwt.decodeToken(result)
    let role = DecodedToken[this.role]
    console.log(role);
    if (role == "Admin")
    {
      return true;
    }
    return false;
  }
}

