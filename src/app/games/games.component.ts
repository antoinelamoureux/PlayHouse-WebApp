import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Game } from '../models/game';
import { TokenStorageService } from '../services/token-storage.service';
import { ActivatedRoute } from '@angular/router';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { NoteService } from '../services/note.service';
import { CategoryService } from '../services/category.service';
import { StateService } from '../services/state.service';
import { ClassificationService } from '../services/classification.service';
import { DevelopperService } from '../services/developper.service';
import { EditorService } from '../services/editor.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  form: any = {};
  gamesCount: number;
  games: Game[] = [];
  filter: string;
  id: number;
  currentList: string;

  constructor(
    private storage: TokenStorageService,
    private gameService: GameService,
    private route: ActivatedRoute,
    private noteService: NoteService,
    private categoryService: CategoryService,
    private stateService: StateService,
    private classificationService: ClassificationService,
    private developperService: DevelopperService,
    private editorService: EditorService,
  ) { }

  ngOnInit(): void {
    this.currentList = 'All Games'
    this.filter = this.route.snapshot.data['filter'] || '';
    console.log(this.filter);
    this.id = +this.route.snapshot.paramMap.get('id');
    this.showGames();
  }

  showGames() {
    this.gameService.getGameByUser(this.storage.getUser().id)
      .pipe(map(games => {
        games.map(game => {
          if (game.cover !== null) {
            //game.cover = `http://playhouse-api-aws-dev.us-west-2.elasticbeanstalk.com/api/files/${game.cover}`;
            game.cover = `http://playhouse-uploads.s3-website-us-west-2.amazonaws.com/${game.cover}`;
          }
        })
        return games;
      }))
      .subscribe(games => {
        //console.log(games);
        this.gamesCount = games.length;
        this.games = this.filterGames(games);
      }, error => {
        console.log(error);
      });
  }
  /*
  getCoverUrl(data: Game[]) {
      const games = data.map(game => {
        if (game.cover !== null) {
        game.cover = `http://localhost:8080/api/files/${game.cover}`
        }
      });
  }
  */
  filterGames(games: Game[]): Game[] {
    switch (this.filter) {
      case 'platform':
        //return games.filter(game => game.category.id === this.id);
        this.gameService.findGamesByCategoryId(this.id)
          .pipe(map(games => {
            games.map(game => {
              if (game.cover !== null) {
                game.cover = `http://playhouse-uploads.s3-website-us-west-2.amazonaws.com/${game.cover}`;
              }
            })
            this.gamesCount = games.length;
            return games;
          }))
          .subscribe(games => {
            console.log(games);
            this.games = games;
            return games;
          });
        break;
      case 'category':
        //return games.filter(game => game.category.id === this.id);
        this.categoryService.findById(this.id)
          .subscribe(category => this.currentList = category.name);
        this.gameService.findGamesByCategoryId(this.id)
          .pipe(map(games => {
            games.map(game => {
              if (game.cover !== null) {
                game.cover = `http://playhouse-uploads.s3-website-us-west-2.amazonaws.com/${game.cover}`;
              }
            })
            this.gamesCount = games.length;
            return games;
          }))
          .subscribe(games => {
            this.games = games;
            return games;
          });
        break;
      case 'classification':
        this.classificationService.findById(this.id)
          .subscribe(classification => this.currentList = classification.name);
        this.gameService.findGamesByClassificationId(this.id)
          .pipe(map(games => {
            games.map(game => {
              if (game.cover !== null) {
                game.cover = `http://playhouse-uploads.s3-website-us-west-2.amazonaws.com/${game.cover}`;
              }
            });
            this.gamesCount = games.length;
            return games;
          }))
          .subscribe(games => {
            this.games = games;
            return games;
          });
        break;
      case 'note':
        this.noteService.findById(this.id)
          .subscribe(note => this.currentList = note.note);
        this.gameService.findGamesByNoteId(this.id)
          .pipe(map(games => {
            games.map(game => {
              if (game.cover !== null) {
                game.cover = `http://playhouse-uploads.s3-website-us-west-2.amazonaws.com/${game.cover}`;
              }
            })
            this.gamesCount = games.length;
            return games;
          }))
          .subscribe(games => {
            this.games = games;
            return games;
          });
        break;
      case 'state':
        this.stateService.findById(this.id)
          .subscribe(state => this.currentList = state.name);
        this.gameService.findGamesByStateId(this.id)
          .pipe(map(games => {
            games.map(game => {
              if (game.cover !== null) {
                game.cover = `http://playhouse-uploads.s3-website-us-west-2.amazonaws.com/${game.cover}`;
              }
            })
            this.gamesCount = games.length;
            return games;
          }))
          .subscribe(games => {
            this.games = games;
            return games;
          });
        break;
      case 'developper':
        this.developperService.findById(this.id)
          .subscribe(developper => this.currentList = developper.name);
        this.gameService.findGamesByDevelopperId(this.id)
          .pipe(map(games => {
            games.map(game => {
              if (game.cover !== null) {
                game.cover = `http://playhouse-uploads.s3-website-us-west-2.amazonaws.com/${game.cover}`;
              }
            })
            this.gamesCount = games.length;
            return games;
          }))
          .subscribe(games => {
            this.games = games;
            return games;
          });
        break;
      case 'editor':
        this.editorService.findById(this.id)
          .subscribe(editor => this.currentList = editor.name);
        this.gameService.findGamesByEditorId(this.id)
          .pipe(map(games => {
            games.map(game => {
              if (game.cover !== null) {
                game.cover = `http://playhouse-uploads.s3-website-us-west-2.amazonaws.com/${game.cover}`;
              }
            })
            this.gamesCount = games.length;
            return games;
          }))
          .subscribe(games => {
            this.games = games;
            return games;
          });
      case 'tag':
        this.gameService.findGamesByEditorId(this.id)
          .pipe(map(games => {
            games.map(game => {
              if (game.cover !== null) {
                game.cover = `http://playhouse-uploads.s3-website-us-west-2.amazonaws.com/${game.cover}`;
              }
            })
            this.gamesCount = games.length;
            return games;
          }))
          .subscribe(games => {
            this.games = games;
            return games;
          });
        break;
      default:
        return games;
    }
  }

  /*     this.gameService.getGames().subscribe(response => {
        this.games = response;
      }, error => {
        console.log(error);
      }); */
}

