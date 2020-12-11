import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameCreateComponent } from './game-create/game-create.component';
import { GameDeleteComponent } from './game-delete/game-delete.component';
import { GameUpdateComponent } from './game-update/game-update.component';
import { GamePlatformComponent } from './game-platform/game-platform.component';
import { GameCategoryComponent } from './game-category/game-category.component';
import { GameDateComponent } from './game-date/game-date.component';
import { GamePriceComponent } from './game-price/game-price.component';
import { GameRatingComponent } from './game-rating/game-rating.component';
import { GameStateComponent } from './game-state/game-state.component';
import { GameEditorComponent } from './game-editor/game-editor.component';
import { GameTagsComponent } from './game-tags/game-tags.component';
import { GameDevelopperComponent } from './game-developper/game-developper.component';

const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin', component: DashboardComponent },
  { path: 'user/game-create', component: GameCreateComponent },
  { path: 'user/game-details/:id', component: GameDetailsComponent },
  { path: 'user/game-delete/:id', component: GameDeleteComponent },
  { path: 'user/game-update/:id', component: GameUpdateComponent },
  { path: 'user/game-platform/:id', component: GamePlatformComponent },
  { path: 'user/game-category/:id', component: GameCategoryComponent },
  { path: 'user/game-date/:id', component: GameDateComponent },
  { path: 'user/game-price/:id', component: GamePriceComponent },
  { path: 'user/game-rating/:id', component: GameRatingComponent },
  { path: 'user/game-state/:id', component: GameStateComponent },
  { path: 'user/game-developper/:id', component: GameDevelopperComponent },
  { path: 'user/game-editor/:id', component: GameEditorComponent },
  { path: 'user/game-tags/:id', component: GameTagsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }