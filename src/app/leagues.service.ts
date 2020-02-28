import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { ILeagues } from "./leagues";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {
  private _url: string = "http://localhost:8000/leagues ";

  constructor(private http: HttpClient) { }

  getLeagues(): Observable<ILeagues[]> {
    return this.http.get<ILeagues[]>(this._url).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
