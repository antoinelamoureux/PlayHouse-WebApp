import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { IgdbService } from '../services/igdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  igdbGames: any;
  isLoading = true;
  content: any;

  constructor(
    private userService: UserService, 
    private router: Router,
    private igdbService: IgdbService) { }

  ngOnInit(): void {
    /*
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

   setTimeout(() => {
    this.router.navigate(['/user']);
  }, 1000);
  */
 this.getToken();
  }

  getToken() {
    this.igdbService.getIdgbGames().subscribe(data => {
      this.isLoading = false;
      this.igdbGames= data;
    });

    console.log(this.igdbGames);
  }

}
