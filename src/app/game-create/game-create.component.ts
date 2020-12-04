import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Game } from '../models/game';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { Category } from '../models/category';
import { State } from '../models/state';
import { Classification } from '../models/classification';
import { Developper } from '../models/developper';
import { Editor } from '../models/editor';
import { Note } from '../models/note';
import { CategoryService } from '../services/category.service';
import { NoteService } from '../services/note.service';
import { StateService } from '../services/state.service';
import { ClassificationService } from '../services/classification.service';
import { DevelopperService } from '../services/developper.service';
import { EditorService } from '../services/editor.service';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss']
})
export class GameCreateComponent implements OnInit {
  form: any = {};
  games: Game[] = [];
  currentGame: Game;
  notes: Note[];
  categories: Category[];
  states: State[];
  classifications: Classification[];
  developpers: Developper[];
  editors: Editor[];

  currentCategory = null;

  message: string;
  //categoryForm: FormGroup;

  constructor(private storage: TokenStorageService,
    private gameService: GameService,
    private noteService: NoteService,
    private categoryService: CategoryService,
    private stateService: StateService,
    private classificationService: ClassificationService,
    private developperService: DevelopperService,
    private editorService: EditorService,
    private router: Router) {
    this.currentGame = new Game();
  }

  ngOnInit(): void {
    this.getSelects();
    /*
    this.categoryForm = new FormGroup({
      categoryControl: new FormControl(this.categories[1])
    });
    */
  }

  getSelects() {
    this.noteService.findAll().subscribe(
      data => {
        this.notes = data;
      },
      err => {
        this.message = JSON.parse(err.error).message;
      }
    );

    this.categoryService.findAll().subscribe(
      data => {
        this.categories = data;
        this.currentCategory = this.categories[0];
      },
      err => {
        this.message = JSON.parse(err.error).message;
      }
    );

    this.stateService.findAll().subscribe(
      data => {
        this.states = data;
      },
      err => {
        this.message = JSON.parse(err.error).message;
      }
    );

    this.classificationService.findAll().subscribe(
      data => {
        this.classifications = data;
      },
      err => {
        this.message = JSON.parse(err.error).message;
      }
    );

    this.developperService.findAll().subscribe(
      data => {
        this.developpers = data;
      },
      err => {
        this.message = JSON.parse(err.error).message;
      }
    );

    this.editorService.findAll().subscribe(
      data => {
        this.editors = data;
      },
      err => {
        this.message = JSON.parse(err.error).message;
      }
    );
  }

  onSubmit(): void {
    console.log(this.currentCategory);
    this.gameService.getGameByUser(this.storage.getUser().id).subscribe(data => {
      this.games = data
      console.log(data);
    }, error => {
      console.log(error);
    });

    this.games.push(this.currentGame);
    console.log(this.games);

    const data = {
      id: this.storage.getUser().id,
      game: this.currentGame
    };

    this.gameService.addGame(data).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });

    this.router.navigate(['/user']);
  }

}
