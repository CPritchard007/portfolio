import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatMenuModule} from '@angular/material';
import {MenuComponent} from './menu/menu.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { InterestsComponent } from './interests/interests.component';
import { LanguagesComponent } from './languages/languages.component';
import { GitHubComponent } from './git-hub/git-hub.component';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { MilestoneProjetsComponent } from './milestone-projets/milestone-projets.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutMeComponent,
    InterestsComponent,
    LanguagesComponent,
    GitHubComponent,
    MilestoneProjetsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,

    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
