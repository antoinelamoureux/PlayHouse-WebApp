import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Editor } from '../models/editor';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  url: string = 'http://playhouse-api-aws-dev.us-west-2.elasticbeanstalk.com/api/editor';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Editor[]> {
    return this.http.get<Editor[]>(this.url);
  }

  findById(id: number): Observable<Editor> {
    const url = `${this.url}/${id}`;
    return this.http.get<Editor>(url);
  }
}
