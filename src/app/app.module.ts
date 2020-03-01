import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LigueSearchComponent } from './ligue-search/ligue-search.component';

import { PlayersService } from './players.service';
import { LeaguesService } from './leagues.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LigueSearchComponent,
    routingComponents,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LeaguesService,
    PlayersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
