import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];

  public constructor() { }

  get history(): string[]{
    return [...this._history ];
  }

  public search( query: string ): void{
    this._history.unshift( query );
    console.log( this.history );
  }
}
