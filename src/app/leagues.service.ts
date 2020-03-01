import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { ILeagues } from "./leagues";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {
  private _url: string = "http://localhost:8000/leagues";

  constructor(private http: HttpClient) { }

  getLeagues(userSearch?: string): Observable<ILeagues[]> {
    let queryParams = "";

    if (userSearch !== undefined) {
      queryParams = `?slug=${userSearch}`;
    }

    return this.http.get<ILeagues[]>(`${this._url}${queryParams}`)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
