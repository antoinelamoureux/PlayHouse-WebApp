import { Component, OnInit } from '@angular/core';
import { ClassificationService } from '../services/classification.service';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';
import { Classification } from '../models/classification';

@Component({
  selector: 'app-game-classification',
  templateUrl: './game-classification.component.html',
  styleUrls: ['./game-classification.component.scss']
})
export class GameClassificationComponent implements OnInit {
  currentClassification: Classification;
  
  constructor(
    private route: ActivatedRoute, 
    private classificationService: ClassificationService,
    private gameService: GameService
  ) { 
    this.currentClassification = {id: 0, name: '', games: []};
  }

  ngOnInit(): void {
    this.getClassification()
  }

  getClassification(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.classificationService.findById(id).subscribe(classification => 
      this.currentClassification = classification);
    this.gameService.findGamesByNoteId(id).subscribe(games => { 
      games.map(game => {
        if (game.cover !== null) {
        game.cover = `http://playhouse-uploads.s3-website-us-west-2.amazonaws.com/${game.cover}`
        }
      });
      this.currentClassification.games = games 
    });
  }
}
