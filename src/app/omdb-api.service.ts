import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {

  constructor(private _http: HttpClient) { }

  private _apiUrl = "http://www.omdbapi.com/?t=";
  private _apiKey = "&apikey=*******" 

  getTVShowData(tvShowName: string): Observable<ITVShowDetails>{
      return this._http.get<ITVShowDetails>(this._apiUrl + tvShowName + this._apiKey);
  }



}
