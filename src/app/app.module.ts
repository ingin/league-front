import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LigueListComponent } from './ligue-list/ligue-list.component';
import { LigueSearchComponent } from './ligue-search/ligue-search.component';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './player/player.component';

import { PlayersService } from './players.service';
import { LeaguesService } from './leagues.service';

@NgModule({
  declarations: [
    AppComponent,
    LigueListComponent,
    LigueSearchComponent,
    PlayersComponent,
    PlayerComponent
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
