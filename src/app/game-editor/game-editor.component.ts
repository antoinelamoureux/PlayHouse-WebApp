import { Component, OnInit } from '@angular/core';
import { Editor } from '../models/editor';
import { ActivatedRoute } from '@angular/router';
import { EditorService } from '../services/editor.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-editor',
  templateUrl: './game-editor.component.html',
  styleUrls: ['./game-editor.component.scss']
})
export class GameEditorComponent implements OnInit {
  currentEditor: Editor;

  constructor(
    private route: ActivatedRoute, 
    private editorService: EditorService,
    private gameService: GameService
  ) {
    this.currentEditor = {id: 0, name: '', history: '', country: '', games: []};
  }

  ngOnInit(): void {
  }

  getDevelopper(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.editorService.findById(id).subscribe(editor => this.currentEditor = editor);
    this.gameService.findGamesByCategoryId(id).subscribe(games => { 
      games.map(game => {
        if (game.cover !== null) {
        game.cover = `http://localhost:8080/api/files/${game.cover}`
        }
      });
      this.currentEditor.games = games 
    });
  }

}
