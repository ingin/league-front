import { Component, OnInit } from '@angular/core';
import { LeaguesService } from "../leagues.service";

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
  ) { }

  ngOnInit(): void {
  }

  shouldCallApi(userSearch) {
    return userSearch.length >= SEARCH_NB_MIN_LENGTH;
  }

  updateSearch(e) {
    console.log("e", e.target.value);
    this.userSearch = e.target.value;

    if(this.shouldCallApi(this.userSearch)) {
      this.fetch();
    }
  }

  fetch() {
    console.log("this.userSearch", this.userSearch);
    console.log("call endpoint now !");

    this._leaguesService.getLeagues(this.userSearch)
      .subscribe(
        data => {
          console.log("nb data", data.length);

          this.noResultFound = data.length === 0;

          console.log("noResultFound", this.noResultFound);

          this.leagues = data;
        }
        , error => this.errorMsg = error);
  }

  setUserSelection(e) {
    console.log("e.target.value", e.target.innerText);
    this.userSearch = e.target.innerText;
    this.leagues = [];
  }

}
