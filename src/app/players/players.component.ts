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
