import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  url: string = 'http://playhouse-api-aws-dev.us-west-2.elasticbeanstalk.com/api/note';
  notes: Note[];

  constructor(private http: HttpClient) { }

  findAll(): Observable<Note[]> {
    return this.http.get<Note[]>(this.url);
  }

  findById(id: number): Observable<Note> {
    const url = `${this.url}/${id}`;
    return this.http.get<Note>(url);
  }
}
