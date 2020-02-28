import { Component, OnInit } from '@angular/core';
import { LeaguesService } from "../leagues.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-ligue-list',
  templateUrl: './ligue-list.component.html',
  styleUrls: ['./ligue-list.component.scss']
})
export class LigueListComponent implements OnInit {

  public leagues = [];
  public errorMsg;

  constructor(
    private _leaguesService: LeaguesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._leaguesService.getLeagues()
      .subscribe(
        data => this.leagues = data
        , error => this.errorMsg = error);
  }

  onClick(league) {
    this.router.navigate(
      ["/leagues", league.slug]
    )
  }

}
