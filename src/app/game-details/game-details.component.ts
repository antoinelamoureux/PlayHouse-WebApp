import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';
import { Game } from '../models/game';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  currentGame: Game;
  currentNote: number;
  stars: number[] = [];

  constructor(private route: ActivatedRoute,
    private gameService: GameService) {
    this.currentGame = new Game();
  }

  ngOnInit(): void {
    this.getGame();
  }

  getGame(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameService.getGame(id).subscribe(game => {
      if (game.cover !== null) {
        game.cover = `http://localhost:8080/api/files/${game.cover}`;
      }
      this.currentGame = game;
      this.currentNote = parseInt(game.note.note, 10);
      this.parseNote();
      console.log(this.stars);
    });
  }

  parseNote() {
    switch (this.currentNote) {
      case 1:
        this.stars.push(1);
        break;
      case 2:
        this.stars.push(1, 2);
        break;
      case 3:
        this.stars.push(1, 2, 3);
        break;
      case 4:
        this.stars.push(1, 2, 3, 4);
        break;
      default:
        this.stars.push(1);
    }
  }

  showDialog() {
    let modal_t = document.getElementById('modal_1')
    modal_t.classList.remove('hhidden')
    modal_t.classList.add('sshow');
  }
  closeDialog() {
    let modal_t = document.getElementById('modal_1')
    modal_t.classList.remove('sshow')
    modal_t.classList.add('hhidden');
  }
}

