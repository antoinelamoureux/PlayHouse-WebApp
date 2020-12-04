import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Game } from '../models/game';
import { TokenStorageService } from '../services/token-storage.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  form: any = {};
  gamesCount: number;
  games: Game[] = [];

  constructor(private storage: TokenStorageService, private gameService: GameService) { }

  ngOnInit(): void {
    this.showGames();
  }

  showGames() {
      this.gameService.getGameByUser(this.storage.getUser().id).subscribe(data => {
        this.games = data
        console.log(data);
      }, error => {
        console.log(error);
      });
      console.log(this.games);
      this.gamesCount = this.games.length;
    }

/*     this.gameService.getGames().subscribe(response => {
      this.games = response;
    }, error => {
      console.log(error);
    }); */
  }

