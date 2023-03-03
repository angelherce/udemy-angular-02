import { Injectable } from '@angular/core';
import {Character} from "../model/character.model";

@Injectable()
export class DbzService{

  public characters: Character[] = [];

  public constructor() {
    this.characters.push({name: 'Goku', power: 15000});
    this.characters.push({name: 'Vegeta', power: 12500});
    this.characters.push({name: 'Krillin', power: 6000});
  }

  public getAll(): Character[]{
    return [...this.characters];
  }

  public save( newCharacter: Character ): void{
    this.characters.push( newCharacter );
  }
}
