import { Injectable } from '@angular/core';
import { Classification } from '../models/classification';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {
  url: string = 'http://localhost:8080/api/classification';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Classification[]> {
    return this.http.get<Classification[]>(this.url);
  }
}
