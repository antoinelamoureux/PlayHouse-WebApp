import { Component, OnInit } from '@angular/core';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Game } from '../models/game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.scss']
})
export class GameSearchComponent implements OnInit {
  games$: Observable<Game[]>;
  private searchTerms = new Subject<string>();

  constructor(private gameService: GameService) { }

  search(keyword: string): void {
    this.searchTerms.next(keyword);
    const searchEvent = document.querySelector('.search-bar');
    searchEvent.addEventListener('input', () => document.querySelector('.search-result').classList.toggle('search-result__focus'));
    searchEvent.addEventListener('change', (e) => {
      setTimeout(() => { 
        document.querySelector('.search-result').classList.remove('search-result__focus');
        const target = e.target as HTMLTextAreaElement;
        target.value = '';
      }, 500);
    }
      );
  }

  ngOnInit(): void {
    this.games$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((keyword: string) => this.gameService.searchGames(keyword)),
    );
  }

}
