import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Editor } from '../models/editor';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  url: string = 'http://localhost:8080/api/editor';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Editor[]> {
    return this.http.get<Editor[]>(this.url);
  }
}
