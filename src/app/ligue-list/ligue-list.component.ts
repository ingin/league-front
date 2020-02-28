import { Component, OnInit } from '@angular/core';
import { LeaguesService } from "../leagues.service";

@Component({
  selector: 'app-ligue-list',
  templateUrl: './ligue-list.component.html',
  styleUrls: ['./ligue-list.component.scss']
})
export class LigueListComponent implements OnInit {

  public leagues = [];

  constructor(private _leaguesService: LeaguesService) { }

  ngOnInit(): void {
    this._leaguesService.getLeagues()
      .subscribe(data => this.leagues = data);
  }

}
