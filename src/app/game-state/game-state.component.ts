import { Component, OnInit } from '@angular/core';
import { State } from '../models/state';
import { StateService } from '../services/state.service';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-state',
  templateUrl: './game-state.component.html',
  styleUrls: ['./game-state.component.scss']
})
export class GameStateComponent implements OnInit {
  currentState: State;

  constructor(
    private route: ActivatedRoute, 
    private stateService: StateService,
    private gameService: GameService
  ) { 
    this.currentState = {id: 0, name: '', games: []};
  }

  ngOnInit(): void {
    this.getState();
  }

  getState(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.stateService.findById(id).subscribe(state => this.currentState = state);
    this.gameService.findGamesByStateId(id).subscribe(games => { 
      games.map(game => {
        if (game.cover !== null) {
        game.cover = `http://localhost:8080/api/files/${game.cover}`
        }
      });
      this.currentState.games = games });
  }

}
