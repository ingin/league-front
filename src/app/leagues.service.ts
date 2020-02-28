import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ILeagues } from "./leagues";

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {
  private _url: string = "http://localhost:8000/leagues";

  constructor(private http: HttpClient) { }

  getLeagues(): Observable<ILeagues[]> {
    return this.http.get<ILeagues[]>(this._url);
  }
}
