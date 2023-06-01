import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IngatlanModel } from '../models/ingatlan.model';
import { CategoryModel } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = "http://localhost:5000/api"

  constructor(private http: HttpClient) { }

  getAllCategory(): Observable<CategoryModel[]>{
    return this.http.get<CategoryModel[]>(`${this.apiUrl}/kategoriak`);
  }

  getAll(): Observable<IngatlanModel[]>{
    return this.http.get<IngatlanModel[]>(`${this.apiUrl}/ingatlan`);
  }

  post(model: IngatlanModel): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/ujingatlan`, model);
  }

}
