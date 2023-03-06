import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, GIFResponse } from '../models/gif.model';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey: string = 'jujeto1zi97u0UeGFZp8Hhd0c4ZVm00T';
  private _host: string = 'https://api.giphy.com/v1/gifs/search';
  private _history: string[] = [];
  private _gifs: Gif[] = [];

  public constructor( private http: HttpClient ) { }

  get history(): string[]{
    return [...this._history ];
  }

  get gifs(): any[]{
    return [...this._gifs ];
  }

  public search( _value: string ): void{
    const value = _value.toLowerCase();
    this.setHistory( value );

    const url = `${this._host}?api_key=${this._apiKey}&q=${value}`;
    console.log( url );
    this.http.get<GIFResponse>( url ).subscribe( ( response: GIFResponse ) => this._gifs = response.data );
  }

  public setHistory( _value: string ): void{
    if( _value.trim().length === 0 || this._history.includes( _value ) ){ return; }

    this._history.unshift( _value );
    this._history = this._history.splice( 0, 10 );
  }
}
