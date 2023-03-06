import { Injectable } from '@angular/core';
import {query} from "@angular/animations";

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];

  public constructor() { }

  get history(): string[]{
    return [...this._history ];
  }

  public search( _value: string ): void{
    const value = _value.toLowerCase();
    this.setHistory( value );
    console.log( this.history );
  }

  public setHistory( _value: string ): void{
    if( _value.trim().length === 0 || this._history.includes( _value ) ){ return; }

    this._history.unshift( _value );
    this._history = this._history.splice( 0, 10 );
  }
}
