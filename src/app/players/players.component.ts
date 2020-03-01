import { Component, OnInit } from '@angular/core';
import { PlayersService } from "../players.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  public slug;
  public players = [];
  public isResult = false;

  constructor(
    private _playersService: PlayersService,
    private route: ActivatedRoute
  ) { }

  formatDateHuman(dateStr) {
    const date = new Date(dateStr);
    const day = (date.getDate()).toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");

    return day + '/'+ month + '/' + date.getFullYear();
  }

  formatNumber(value) {
    return new Intl.NumberFormat(
      "fr-FR",
      {
        style: 'currency',
        currency: 'EUR'
      })
      .format(value)
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get("slug");
    this.isResult = this.slug !== null;

    this.route.params.subscribe(params => {
      console.log("params", params);

      this.slug = params.slug;

      console.log("this.slug", this.slug);

      if (this.slug !== undefined) {
        this._playersService.getPlayers(this.slug)
          .subscribe(data => this.players = data);
      }
    });

    this._playersService.getPlayers(this.slug)
      .subscribe(data => this.players = data);
  }
}
