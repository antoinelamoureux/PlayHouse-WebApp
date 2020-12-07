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
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss']
})
export class GameCreateComponent implements OnInit {
  form: any = {};
  games: Game[] = [];
  notes: Note[];
  categories: Category[];
  states: State[];
  classifications: Classification[];
  developpers: Developper[];
  editors: Editor[];

  currentGame: Game;
  currentNote = null;
  currentCategory = null;
  currentState = null;
  currentClassification = null;
  currentDevelopper = null;
  currentEditor = null;

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
    private uploadService: UploadService,
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
        //this.currentNote = this.notes[0];
        this.currentGame.note = this.notes[0];
      },
      err => {
        this.message = JSON.parse(err.error).message;
      }
    );

    this.categoryService.findAll().subscribe(
      data => {
        this.categories = data;
        //this.currentCategory = this.categories[0];
        this.currentGame.category = this.categories[0];
      },
      err => {
        this.message = JSON.parse(err.error).message;
      }
    );

    this.stateService.findAll().subscribe(
      data => {
        this.states = data;
        //this.currentState = this.states[0];
        this.currentGame.state = this.states[0];
      },
      err => {
        this.message = JSON.parse(err.error).message;
      }
    );

    this.classificationService.findAll().subscribe(
      data => {
        this.classifications = data;
        //this.currentClassification = this.classifications[0];
        this.currentGame.classification = this.classifications[0];
      },
      err => {
        this.message = JSON.parse(err.error).message;
      }
    );

    this.developperService.findAll().subscribe(
      data => {
        this.developpers = data;
        //this.currentDevelopper = this.developpers[0];
        this.currentGame.idDevelopper = this.developpers[0];
      },
      err => {
        this.message = JSON.parse(err.error).message;
      }
    );

    this.editorService.findAll().subscribe(
      data => {
        this.editors = data;
        //this.currentEditor= this.editors[0];
        this.currentGame.idEditor = this.editors[0];
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

    this.currentGame.cover = this.uploadService.getFile().name;
    this.uploadService.uploadFile(this.uploadService.getFile()).subscribe(response => {
      console.log(response);
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
