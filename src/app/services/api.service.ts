import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NModel } from '../models/n.model';
import { CategoryModel } from '../models/1.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = "http://127.0.0.1:8000/api"

  constructor(private http: HttpClient) { }

  getAll(): Observable<NModel[]>{
    return this.http.get<NModel[]>(`${this.apiUrl}/something`);
  }

  getAllByNumber(num: number | string): Observable<NModel[]>{
    return this.http.get<NModel[]>(`${this.apiUrl}/something/${num}`);
  }

    getByNumber(num: number | string): Observable<NModel>{
    return this.http.get<NModel>(`${this.apiUrl}/something/${num}`);
  }

  getAllCategory(): Observable<CategoryModel[]>{
    return this.http.get<CategoryModel[]>(`${this.apiUrl}/something`);
  }

  getCategoryByNumber(num: number | string): Observable<CategoryModel>{
    return this.http.get<CategoryModel>(`${this.apiUrl}/something/${num}`);
  }

  post(model: NModel): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/something`, model);
  }

}
