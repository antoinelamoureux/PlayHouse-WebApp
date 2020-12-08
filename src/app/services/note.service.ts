import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  url: string = 'http://localhost:8080/api/note';
  notes: Note[];

  constructor(private http: HttpClient) { }

  findAll(): Observable<Note[]> {
    return this.http.get<Note[]>(this.url);
  }
}
