import { Component, OnInit } from '@angular/core';
import { PlayersService } from "../players.service";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  public players = [];

  constructor(private _playersService: PlayersService) { }

  ngOnInit(): void {
    this._playersService.getPlayers()
      .subscribe(data => this.players = data);
  }

}
