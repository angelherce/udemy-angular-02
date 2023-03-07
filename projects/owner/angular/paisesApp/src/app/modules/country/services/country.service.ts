import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private host: string = `https://restcountries.com`;
  private version: string = `v3.1`;
  private apiUrl: string = `${this.host}/${this.version}`;

  public constructor( private http: HttpClient ) {}

  public searchByCountry( value: string ): Observable<any>{
    const url = `${this.apiUrl}/name/${value}`;
    return this.http.get( url ); //.pipe( catchError( error => of([])));
  }
}
