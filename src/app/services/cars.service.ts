import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Car} from "../models/Cars.interface";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  readonly URL = 'http://localhost:8080/cars';

  constructor(
    private http: HttpClient
  ) { }


  addNewCar(car: Car): Observable<Car> {
    return this.http.post(this.URL, car, httpOptions)
      .pipe(
        // @ts-ignore
        catchError(this.handleError('addCar', car))
      );
  }

  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.URL}/${id}`);
  }

  getAllCars(): Observable<Array<Car>> {
    return this.http.get<Array<Car>>(this.URL);
  }

  deleteCarBySerialNumber(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`, httpOptions)
      .pipe(
        // @ts-ignore
        catchError(this.handleError('deleteCar'))
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
