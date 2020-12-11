import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatformService } from '../services/platform.service';
import { Platform } from '../models/platform';

@Component({
  selector: 'app-game-platform',
  templateUrl: './game-platform.component.html',
  styleUrls: ['./game-platform.component.scss']
})
export class GamePlatformComponent implements OnInit {
  currentPlatform: Platform;

  constructor(
    private route: ActivatedRoute, 
    private platformService: PlatformService
  ) { }

  ngOnInit(): void {
    this.getPlatform();
  }

  getPlatform(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.platformService.findById(id).subscribe(platform => this.currentPlatform = platform);
  }
}
