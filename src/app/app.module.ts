import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlatformComponent } from './platform/platform.component';
import { CategoryComponent } from './category/category.component';
import { GamesComponent } from './games/games.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { GameSearchComponent } from './game-search/game-search.component';
import { UserComponent } from './user/user.component';
import { GameCreateComponent } from './game-create/game-create.component';
import { GameUpdateComponent } from './game-update/game-update.component';
import { GameDeleteComponent } from './game-delete/game-delete.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { UploadFileComponent } from './upload-file/upload-file.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    DashboardComponent,
    PlatformComponent,
    CategoryComponent,
    GamesComponent,
    GameDetailsComponent,
    GameSearchComponent,
    UserComponent,
    GameCreateComponent,
    GameUpdateComponent,
    GameDeleteComponent,
    UploadFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
