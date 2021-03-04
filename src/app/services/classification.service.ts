import { Injectable } from '@angular/core';
import { Classification } from '../models/classification';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {
  url: string = 'http://playhouse-api-aws-dev.us-west-2.elasticbeanstalk.com/api/classification';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Classification[]> {
    return this.http.get<Classification[]>(this.url);
  }

  findById(id: number): Observable<Classification> {
    const url = `${this.url}/${id}`;
    return this.http.get<Classification>(url);
  }
}
