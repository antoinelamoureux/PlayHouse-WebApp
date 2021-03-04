import { Injectable } from '@angular/core';
import { State } from '../models/state';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  url: string = 'http://playhouse-api-aws-dev.us-west-2.elasticbeanstalk.com/api/state';

  constructor(private http: HttpClient) { }

  findAll(): Observable<State[]> {
    return this.http.get<State[]>(this.url);
  }

  findById(id: number): Observable<State> {
    const url = `${this.url}/${id}`;
    return this.http.get<State>(url);
  }
}