import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductregisterService {

  constructor(private http: HttpClient) { }
  public productregister(productregister: any): Observable<any> {
    return this.http.post("https://localhost:44303/api/Product/AddProduct", productregister, { responseType: 'text' });
  }
}
