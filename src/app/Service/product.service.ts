import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  public getallproducts(): Observable<any> {
    return this.http.get("https://localhost:44303/api/Product/GetAllProducts");
  }
  public getbyId(Id: number): Observable<any> {
    return this.http.get("https://localhost:44303/api/Product/GetById?Id=" + Id);
  }
}
