import { Component, OnInit } from '@angular/core';
import { DevelopperService } from '../services/developper.service';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';
import { Developper } from '../models/developper';

@Component({
  selector: 'app-game-developper',
  templateUrl: './game-developper.component.html',
  styleUrls: ['./game-developper.component.scss']
})
export class GameDevelopperComponent implements OnInit {
  currentDevelopper: Developper;

  constructor(
    private route: ActivatedRoute, 
    private developperService: DevelopperService,
    private gameService: GameService
    ) { 
      this.currentDevelopper = {id: 0, name: '', history: '', country: '', games: []};
    }

  ngOnInit(): void {
    this.getDevelopper();
  }

  getDevelopper(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.developperService.findById(id).subscribe(developper => this.currentDevelopper = developper);
    this.gameService.findGamesByCategoryId(id).subscribe(games => { 
      games.map(game => {
        if (game.cover !== null) {
        game.cover = `http://localhost:8080/api/files/${game.cover}`
        }
      });
      this.currentDevelopper.games = games 
    });
  }

}
