import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NModel } from '../models/n.model';
import { OneModel } from '../models/1.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = "http://127.0.0.1:8000/api"

  constructor(private http: HttpClient) { }

  getAllNSide(): Observable<NModel[]>{
    return this.http.get<NModel[]>(`${this.apiUrl}/NSide`);
  }

  getAllOneSide(): Observable<OneModel[]>{
    return this.http.get<OneModel[]>(`${this.apiUrl}/OneSide`);
  }

  getNSdeByNumber(num: number | string): Observable<NModel>{
    return this.http.get<NModel>(`${this.apiUrl}/NSide/${num}`);
  }
}
