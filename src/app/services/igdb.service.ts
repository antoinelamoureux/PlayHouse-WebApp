import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MessageService } from './message.service';

//IGCB id: 99ldibesqn5wztwl615lto1kf4dkbz
//IGDB secret: 0qwdhcsa0z6c7xmpfb096en9azbhvz
//URL: https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=99ldibesqn5wztwl615lto1kf4dkbz&client_secret=0qwdhcsa0z6c7xmpfb096en9azbhvz&grant_type=client_credentials

@Injectable({
  providedIn: 'root'
})
export class IgdbService {
  url: string = 'http://playhouse-api-aws-dev.us-west-2.elasticbeanstalk.com/api/igdb/games'
  //https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/dfgkfivjrhcksyymh9vw.jpg
  /*
  baseUrl: string = 'https://id.twitch.tv/oauth2/authorize?response_type=token&'
  + 'client_id=99ldibesqn5wztwl615lto1kf4dkbz'
  + '&client_secret=0qwdhcsa0z6c7xmpfb096en9azbhvz&grant_type=client_credentials';
  accessToken: any = {};

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'client-id': 'id',
      'authorization': `Bearer ${this.accessToken}`
  })
  };
  */

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  getIdgbGames(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
        tap(data => console.log('IGDB RESULTS' + data),
        error => console.error(error)
        )
    );
  }

}
