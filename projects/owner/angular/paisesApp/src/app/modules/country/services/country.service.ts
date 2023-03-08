import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private host: string = `https://restcountries.com`;
  private version: string = `v3.1`;
  private apiUrl: string = `${this.host}/${this.version}`;
  private fieldsOfTable: Params;
  private fieldsOfDetail: Params;

  public constructor( private http: HttpClient ) {
    this.fieldsOfTable = new HttpParams().set( 'fields', 'name,flag,flags,cca2,region,capital,population' );
    this.fieldsOfDetail = new HttpParams().set( 'fields', 'name,flag,flags,maps,ccn3,cca2,cca3,continents,region,capital,population,translations' );
  }

  public searchByCode( value: string ): Observable<Country>{
    const params: Params = this.fieldsOfDetail;
    const url = `${this.apiUrl}/alpha/${value}`;
    return this.http.get<Country>( url, {params} );//.pipe( map( response => response[0] ));
  }

  public searchByCountry( value: string ): Observable<Country[]>{
    const params: Params = this.fieldsOfTable;
    const url = `${this.apiUrl}/name/${value}`;
    return this.http.get<Country[]>( url, {params} ); //.pipe( catchError( error => of([])));
  }

  public searchByRegion( value: string ): Observable<Country[]>{
    const params: Params = this.fieldsOfTable;
    const url = `${this.apiUrl}/region/${value}`;
    return this.http.get<Country[]>( url, {params} ); //.pipe( catchError( error => of([])));
  }

  public searchByCapital( value: string ): Observable<Country[]>{
    const params: Params = this.fieldsOfTable;
    const url = `${this.apiUrl}/capital/${value}`;
    return this.http.get<Country[]>( url, {params} ); //.pipe( catchError( error => of([])));
  }
}
