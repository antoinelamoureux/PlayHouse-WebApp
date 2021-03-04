import { Component, OnInit, ElementRef } from '@angular/core';
import { Game } from '../models/game';
import { ActivatedRoute, Router } from '@angular/router';
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
    private location: Location,
    private router: Router,
    private el: ElementRef
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
    this.router.navigate(['/user']);
  }

  goBack(): void {
    this.location.back();
  }

  close() {
    this.el.nativeElement.classList.remove('sshow')
    this.el.nativeElement.classList.add('hhidden')
  }
}
