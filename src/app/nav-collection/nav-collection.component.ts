import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { CategoryService } from '../services/category.service';
import { StateService } from '../services/state.service';
import { ClassificationService } from '../services/classification.service';
import { DevelopperService } from '../services/developper.service';
import { EditorService } from '../services/editor.service';
import { Router } from '@angular/router';
import { Note } from '../models/note';
import { Category } from '../models/category';
import { State } from '../models/state';
import { Classification } from '../models/classification';
import { Developper } from '../models/developper';
import { Editor } from '../models/editor';
import { PlatformService } from '../services/platform.service';
import { Platform } from '../models/platform';
import { Tag } from '../models/tag';
import { TagService } from '../services/tag.service';

@Component({
  selector: 'app-nav-collection',
  templateUrl: './nav-collection.component.html',
  styleUrls: ['./nav-collection.component.scss']
})
export class NavCollectionComponent implements OnInit {
  platforms: Platform[];
  categories: Category[];
  notes: Note[];
  states: State[];
  classifications: Classification[];
  developpers: Developper[];
  editors: Editor[];
  tags: Tag[];
  message: string;

  constructor(
    private platformService: PlatformService,
    private noteService: NoteService,
    private categoryService: CategoryService,
    private stateService: StateService,
    private classificationService: ClassificationService,
    private developperService: DevelopperService,
    private editorService: EditorService,
    private tagService: TagService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDropdowns();
  }

  getDropdowns() {
    this.platformService.findAll().subscribe(
      data => {
        this.platforms = data;
      },
      err => {
        this.message = JSON.parse(err.error).message;
      }
    );

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

    this.tagService.findAll().subscribe(
      data => {
        this.tags = data;
      },
      err => {
        this.message = JSON.parse(err.error).message;
      }
    );
  }

}
