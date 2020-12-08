import { Injectable } from '@angular/core';
import { State } from '../models/state';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  url: string = 'http://localhost:8080/api/state';

  constructor(private http: HttpClient) { }

  findAll(): Observable<State[]> {
    return this.http.get<State[]>(this.url);
  }
}