import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LigueListComponent } from "./ligue-list/ligue-list.component";
import { PlayersComponent } from "./players/players.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";


const routes: Routes = [
  {
    path: "",
    redirectTo: "/leagues",
    pathMatch: "full"
  },
  {
    path: "leagues",
    component: LigueListComponent
  },
  {
    path: "leagues/:slug",
    component: PlayersComponent
  },
  {
    path: "players",
    component: PlayersComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LigueListComponent,
  PlayersComponent,
  PageNotFoundComponent
];
