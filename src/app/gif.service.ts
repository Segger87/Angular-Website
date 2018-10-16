import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {IGif} from './gif';


@Injectable({
  providedIn: 'root'
})
export class GifService {

   trendingUrl = 'https://api.giphy.com/v1/gifs/trending?api_key=jmJFGQx32Mt6etpKr7aTpjXmn977kSYi&limit=10&rating=G';

  constructor(private _HttpClient: HttpClient) { }

  retrieveGifData(): Observable<IGif> {
    return this._HttpClient.get<IGif>(this.trendingUrl).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    console.error(error.message);
    return observableThrowError(error.message || 'Error!');
  }
}
