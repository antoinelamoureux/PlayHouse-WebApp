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
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }