import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Game } from '../models/game';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  url: string = 'http://localhost:8080/api/games';
  games: Game[];

  constructor(
    private http: HttpClient,
    private storage: TokenStorageService
    ) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.url);
  }

  getGame(id: number): Observable<Game> {
    const url = `${this.url}/${id}`;
    return this.http.get<Game>(url);
  }

  addGame(data: any): Observable<Game> {
    return this.http.post<Game>(this.url, data);
  }

  deleteGame(id: number): Observable<Game>  {
    const url = `${this.url}/delete/${id}`;
    return this.http.delete<Game>(url);
  }

  updateGame(id: number, game: Game): Observable<Game> {
    console.log(game.title);
    return this.http.put<Game>(`${this.url}/${id}`, game);
  }

  getGameByUser(id: number): Observable<Game[]> {
    const url = `${this.url}/user/${id}`;
    return this.http.get<Game[]>(url);
  }

  findGamesByPlatformId(id: number): Observable<Game[]> {
    const userId: number = this.storage.getUser().id;
    const params = new HttpParams().append('userId', userId.toString());
    const url = `${this.url}/platform/${id}`;
    return this.http.get<Game[]>(url, {params: params});
  }

  findGamesByCategoryId(id: number): Observable<Game[]> {
    const userId: number = this.storage.getUser().id;
    const params = new HttpParams().append('userId', userId.toString());
    const url = `${this.url}/category/${id}`;
    return this.http.get<Game[]>(url, {params: params});
  }

  findGamesByStateId(id: number): Observable<Game[]> {
    const userId: number = this.storage.getUser().id;
    const params = new HttpParams().append('userId', userId.toString());
    const url = `${this.url}/state/${id}`;
    return this.http.get<Game[]>(url, {params: params});
  }

  findGamesByNoteId(id: number): Observable<Game[]> {
    const userId: number = this.storage.getUser().id;
    const params = new HttpParams().append('userId', userId.toString());
    const url = `${this.url}/note/${id}`;
    return this.http.get<Game[]>(url, {params: params});
  }

  findGamesByClassificationId(id: number): Observable<Game[]> {
    const userId: number = this.storage.getUser().id;
    const params = new HttpParams().append('userId', userId.toString());
    const url = `${this.url}/classification/${id}`;
    return this.http.get<Game[]>(url, {params: params});
  }

  findGamesByDevelopperId(id: number): Observable<Game[]> {
    const userId: number = this.storage.getUser().id;
    const params = new HttpParams().append('userId', userId.toString());
    const url = `${this.url}/developper/${id}`;
    return this.http.get<Game[]>(url, {params: params});
  }

  findGamesByEditorId(id: number): Observable<Game[]> {
    const userId: number = this.storage.getUser().id;
    const params = new HttpParams().append('userId', userId.toString());
    const url = `${this.url}/editor/${id}`;
    return this.http.get<Game[]>(url, {params: params});
  }

  findGamesByTagId(id: number): Observable<Game[]> {
    const userId: number = this.storage.getUser().id;
    const params = new HttpParams().append('userId', userId.toString());
    const url = `${this.url}/tag/${id}`;
    return this.http.get<Game[]>(url, {params: params});
  }
}
