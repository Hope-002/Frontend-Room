import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LocationName } from './models/location-name';

@Injectable({
  providedIn: 'root',
})
export class RoomServiceService {
  url: string = 'https://localhost:7257/api/Rooms';

  constructor(private httpclient: HttpClient) {}

  public getRoomDetails() {
    return this.httpclient.get(this.url).pipe(catchError(this.handleError));
  }

  addNewRoom(user: any) {
    return this.httpclient.post(this.url, user);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
      (errorMessage = `Backend returned code ${error.status}, body was: `),
        error.error;
    }
    errorMessage += 'Something bad happened; please try again later.';
    return throwError(() => new Error(errorMessage));
  }
}
