import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { Note } from '../models/note';
import { Category } from '../models/category';
import { State } from '../models/state';
import { Classification } from '../models/classification';
import { Developper } from '../models/developper';
import { Editor } from '../models/editor';
import { TokenStorageService } from '../services/token-storage.service';
import { GameService } from '../services/game.service';
import { NoteService } from '../services/note.service';
import { CategoryService } from '../services/category.service';
import { StateService } from '../services/state.service';
import { ClassificationService } from '../services/classification.service';
import { DevelopperService } from '../services/developper.service';
import { EditorService } from '../services/editor.service';
import { UploadService } from '../services/upload.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game-update',
  templateUrl: './game-update.component.html',
  styleUrls: ['./game-update.component.scss']
})
export class GameUpdateComponent implements OnInit {
  id: number;
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

  constructor(
    private route: ActivatedRoute, 
    private location: Location,
    private storage: TokenStorageService,
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
    this.getGame();
  }

  getGame(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.gameService.getGame(this.id).subscribe(game => this.currentGame = game);
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
    this.setCurrentGame();
    /*
    this.gameService.getGameByUser(this.storage.getUser().id).subscribe(data => {
      this.games = data
      console.log(data);
    }, error => {
      console.log(error);
    });
    */
    if (this.uploadService.getFile() !== undefined) {
      this.currentGame.cover = this.uploadService.getFile().name;

      this.uploadService.uploadFile(this.uploadService.getFile()).subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
    } 
    
    /*
    this.games.push(this.currentGame);
    console.log(this.games);

    const data = {
      id: this.storage.getUser().id,
      game: this.currentGame
    };
    */
   console.log(this.currentGame)

    this.gameService.updateGame(this.id, this.currentGame).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
    
    const navigate = () => this.router.navigate(['/user']);
    setTimeout(navigate, 5000);
  }

  setCurrentGame() {
    this.currentGame.note = this.currentNote;
    this.currentGame.category = this.currentCategory;
    this.currentGame.state = this.currentState;
    this.currentGame.classification = this.currentClassification;
    this.currentGame.idDevelopper = this.currentDevelopper;
    this.currentGame.idEditor = this.currentEditor;
  }

  goBack(): void {
    this.location.back();
  }
}
