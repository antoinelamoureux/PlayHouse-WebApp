import { Injectable } from '@angular/core';
import { Platform } from '../models/platform';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  url: string = 'http://playhouse-api-aws-dev.us-west-2.elasticbeanstalk.com/api/platform';
  platforms: Platform[];

  constructor(private http: HttpClient) { }

  findAll(): Observable<Platform[]> {
    return this.http.get<Platform[]>(this.url);
  }

  findById(id: number): Observable<Platform> {
    const url = `${this.url}/${id}`;
    return this.http.get<Platform>(url);
  }
}
