import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RunnerModel } from '../models/runner.model';
import { CategoryModel } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = "http://127.0.0.1:8000/api"

  constructor(private http: HttpClient) { }

  getAllCategory(): Observable<CategoryModel[]>{
    return this.http.get<CategoryModel[]>(`${this.apiUrl}/category`);
  }

  getCategoryByNumber(num: number | string): Observable<CategoryModel>{
    return this.http.get<CategoryModel>(`${this.apiUrl}/category/${num}`);
  }

  getAll(): Observable<RunnerModel[]>{
    return this.http.get<RunnerModel[]>(`${this.apiUrl}/runners`);
  }

  getAllByNumber(num: number | string): Observable<RunnerModel[]>{
    return this.http.get<RunnerModel[]>(`${this.apiUrl}/runners/${num}`);
  }

  getByNumber(num: number | string): Observable<RunnerModel>{
    return this.http.get<RunnerModel>(`${this.apiUrl}/runner/${num}`);
  }

  post(model: RunnerModel): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/runner`, model);
  }

}
