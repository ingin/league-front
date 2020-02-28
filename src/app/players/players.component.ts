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

  constructor(
    private _playersService: PlayersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get("slug");

    this._playersService.getPlayers(this.slug)
      .subscribe(data => this.players = data);
  }

}
