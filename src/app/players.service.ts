import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IPlayers } from "./players";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private _url: string = "/assets/data/players.json";

  constructor(private http: HttpClient) { }

  getPlayers(leagueSlug): Observable<IPlayers[]> {
    return this.http.get<IPlayers[]>(`${this._url}?slug=${leagueSlug}`);
  }

}
