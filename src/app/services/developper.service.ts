import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Developper } from '../models/developper';
import { HttpClient } from '@angular/common/http';
import { Classification } from '../models/classification';

@Injectable({
  providedIn: 'root'
})
export class DevelopperService {
  url: string = 'http://localhost:8080/api/developper';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Developper[]> {
    return this.http.get<Developper[]>(this.url);
  }
}
