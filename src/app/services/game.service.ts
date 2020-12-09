import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  url: string = 'http://localhost:8080/api/games';
  games: Game[];

  constructor(private http: HttpClient) { }

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

  updateGame(game: Game): Observable<Game> {
    return this.http.put<Game>(this.url, game);
  }

  getGameByUser(id: number): Observable<Game[]> {
    const url = `${this.url}/user/${id}`;
    return this.http.get<Game[]>(url);
  }
}
