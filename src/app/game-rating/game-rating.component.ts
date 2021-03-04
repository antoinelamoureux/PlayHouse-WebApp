import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../services/note.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-rating',
  templateUrl: './game-rating.component.html',
  styleUrls: ['./game-rating.component.scss']
})
export class GameRatingComponent implements OnInit {
  currentNote: Note;

  constructor(
    private route: ActivatedRoute, 
    private noteService: NoteService,
    private gameService: GameService
  ) { 
    this.currentNote = {id: 0, note: '', games: []};
  }

  ngOnInit(): void {
    this.getRating();
  }

  getRating(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.noteService.findById(id).subscribe(category => this.currentNote = category);
    this.gameService.findGamesByNoteId(id).subscribe(games => { 
      games.map(game => {
        if (game.cover !== null) {
        game.cover = `http://playhouse-uploads.s3-website-us-west-2.amazonaws.com/${game.cover}`
        }
      });
      this.currentNote.games = games });
  }
}
