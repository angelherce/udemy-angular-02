import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, GIFResponse } from '../models/gif.model';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey: string = 'jujeto1zi97u0UeGFZp8Hhd0c4ZVm00T';
  private _host: string = 'https://api.giphy.com/v1/gifs';
  private _history: string[] = [];
  private _gifs: Gif[] = [];

  public constructor( private http: HttpClient ) {
    this._history = JSON.parse( localStorage.getItem('history')! ) || [];
    this._gifs = JSON.parse( localStorage.getItem('gifs')! ) || [];
  }

  get history(): string[]{
    return [...this._history ];
  }

  get gifs(): any[]{
    return [...this._gifs ];
  }

  public search( _value: string ): void{
    const value = _value.toLowerCase();
    this.setHistory( value );

    const url = `${this._host}/search`;
    const params = new HttpParams()
      .set( 'apiKey', this._apiKey )
      .set( 'limit', '30' )
      .set( 'q', value );

    this.http.get<GIFResponse>( url, { params } ).subscribe( ( response: GIFResponse ) => {
      this._gifs = response.data;
      localStorage.setItem( 'gifs', JSON.stringify( this._gifs ));
    });
  }

  public setHistory( _value: string ): void{
    if( _value.trim().length === 0 || this._history.includes( _value ) ){ return; }

    this._history.unshift( _value );
    this._history = this._history.splice( 0, 10 );
    localStorage.setItem( 'history', JSON.stringify( this._history ));
  }
}
