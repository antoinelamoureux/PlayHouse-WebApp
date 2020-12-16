import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Game } from '../models/game';
import { Observable, of } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  url: string = 'http://localhost:8080/api/games';
  games: Game[];

  constructor(
    private http: HttpClient,
    private storage: TokenStorageService,
    private messageService: MessageService
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

  searchGames(keyword: string): Observable<Game[]> {
    const url = `${this.url}/search/${keyword}`;
    if (!keyword.trim()) {
      return of([]);
    }
    return this.http.get<Game[]>(url).pipe(
      tap(x => x.length ?
        this.log(`Found games matching "${keyword}"`) :
        this.log(`No games matching "${keyword}"`)),
      catchError(this.handleError<Game[]>('searchGame', []))
        );
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

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
