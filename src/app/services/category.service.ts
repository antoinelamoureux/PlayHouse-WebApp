import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url: string = 'http://localhost:8080/api/category';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  findById(id: number): Observable<Category> {
    const url = `${this.url}/${id}`;
    return this.http.get<Category>(url);
  }
}
