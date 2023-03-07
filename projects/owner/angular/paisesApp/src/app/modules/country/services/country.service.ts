import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private host: string = `https://restcountries.com`;
  private version: string = `v3.1`;
  private apiUrl: string = `${this.host}/${this.version}`;

  public constructor( private http: HttpClient ) {}

  public searchByCountry( value: string ): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${value}`;
    return this.http.get<Country[]>( url ); //.pipe( catchError( error => of([])));
  }

  public searchByRegion( value: string ): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${value}`;
    return this.http.get<Country[]>( url ); //.pipe( catchError( error => of([])));
  }

  public searchByCapital( value: string ): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${value}`;
    return this.http.get<Country[]>( url ); //.pipe( catchError( error => of([])));
  }
}
