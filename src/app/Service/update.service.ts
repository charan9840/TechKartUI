import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient) { }
  public update(update: any, id: number): Observable<any> {
    console.log(update);
    return this.http.put(`https://localhost:44303/api/Product/UpdateProduct?Id=${id}`, update, { responseType: 'text' });
  }
  public delete(id: number): Observable<any> {
    return this.http.delete(`https://localhost:44303/api/Product/DeleteProduct?Id=${id}`, { responseType: 'text' });
  }
}
