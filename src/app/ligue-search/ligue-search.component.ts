import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ligue-search',
  templateUrl: './ligue-search.component.html',
  styleUrls: ['./ligue-search.component.scss']
})
export class LigueSearchComponent implements OnInit {

  public search = "Search";
  public status = false;

  constructor() { }

  ngOnInit(): void {
  }

}
