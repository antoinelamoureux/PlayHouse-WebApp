import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  url: string = 'http://localhost:8080/api/tags';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.url);
  }
}
