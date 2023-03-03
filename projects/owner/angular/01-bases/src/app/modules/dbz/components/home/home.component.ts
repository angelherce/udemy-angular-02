import { Component, OnInit } from '@angular/core';
import { Character } from '../../model/character.model';

@Component({
  selector: 'dbz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title: string = 'Dragon Ball Z';

  public characters: Character[] = [];

  public defaultCharacter: Character = {
    name: 'Pepe',
    power: 100000
  };

  public constructor() {
    this.characters.push({name: 'Goku', power: 15000});
    this.characters.push({name: 'Vegeta', power: 12500});
    this.characters.push({name: 'Krillin', power: 6000});
  }

  public ngOnInit(): void {
  }
}
