import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game-delete',
  templateUrl: './game-delete.component.html',
  styleUrls: ['./game-delete.component.scss']
})
export class GameDeleteComponent implements OnInit {
  currentGame: Game;

  constructor(
    private route: ActivatedRoute, 
    private gameService: GameService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getGame();
  }

  getGame(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameService.getGame(id).subscribe(game => this.currentGame = game);
  }

  deleteGame(id: number) {
    this.gameService.deleteGame(this.currentGame.id).subscribe();
    this.location.back();
  }

  goBack(): void {
    this.location.back();
  }
}
