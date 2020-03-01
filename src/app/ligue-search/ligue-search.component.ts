import { Component, OnInit } from '@angular/core';
import { LeaguesService } from "../leagues.service";
import { Router} from "@angular/router";
import slugify from "slugify";

const SEARCH_NB_MIN_LENGTH = 3;

@Component({
  selector: 'app-ligue-search',
  templateUrl: './ligue-search.component.html',
  styleUrls: ['./ligue-search.component.scss']
})
export class LigueSearchComponent implements OnInit {

  public status = false;
  public leagues = [];
  public errorMsg;
  public userSearch;
  public noResultFound = false;

  constructor(
    private _leaguesService: LeaguesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  shouldCallApi(userSearch) {
    return userSearch.length >= SEARCH_NB_MIN_LENGTH;
  }

  updateSearch(e) {
    this.userSearch = e.target.value;

    if(this.shouldCallApi(this.userSearch)) {
      this.fetch();
    }
  }

  fetch() {
    console.log("fetch / this.userSearch", this.userSearch);

    this._leaguesService.getLeagues(this.userSearch)
      .subscribe(
        data => {
          this.noResultFound = data.length === 0;
          this.leagues = data;
        }
        , error => this.errorMsg = error);
  }

  setUserSelection(e) {
    console.log("e.target.value", e.target.innerText);
    this.userSearch = e.target.innerText;
    this.leagues = [];

    this.router.navigate(
      ["/leagues", slugify(this.userSearch.toLowerCase())]
    )
  }

}
