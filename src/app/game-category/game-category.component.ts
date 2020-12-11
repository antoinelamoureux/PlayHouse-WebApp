import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { ActivatedRoute } from '@angular/router';
import { PlatformService } from '../services/platform.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-game-category',
  templateUrl: './game-category.component.html',
  styleUrls: ['./game-category.component.scss']
})
export class GameCategoryComponent implements OnInit {
  currentCategory: Category;

  constructor(
    private route: ActivatedRoute, 
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.findById(id).subscribe(category => this.currentCategory = category);
  }
}