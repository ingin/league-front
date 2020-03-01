import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IPlayers } from "./players";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private _url: string = "http://localhost:8000/players";

  constructor(private http: HttpClient) { }

  getPlayers(leagueSlug): Observable<IPlayers[]> {
    let queryParams = "";

    if (leagueSlug !== undefined) {
      queryParams = `?slug=${leagueSlug}`;
    }

    return this.http.get<IPlayers[]>(`${this._url}${queryParams}`);
  }

}
