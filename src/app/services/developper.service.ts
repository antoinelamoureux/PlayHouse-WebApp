import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Developper } from '../models/developper';
import { HttpClient } from '@angular/common/http';
import { Classification } from '../models/classification';

@Injectable({
  providedIn: 'root'
})
export class DevelopperService {
  url: string = 'http://playhouse-api-aws-dev.us-west-2.elasticbeanstalk.com/api/developper';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Developper[]> {
    return this.http.get<Developper[]>(this.url);
  }

  findById(id: number): Observable<Developper> {
    const url = `${this.url}/${id}`;
    return this.http.get<Developper>(url);
  }
}
