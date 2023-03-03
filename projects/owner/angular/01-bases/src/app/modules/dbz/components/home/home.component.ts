import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dbz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title: string = 'Dragon Ball Z';

  public characters: Character[] = [];
  public newCharacter: Character = {
    name: '',
    power: 0
  };

  public constructor() {
    this.characters.push({name: 'Goku', power: 15000});
    this.characters.push({name: 'Vegeta', power: 12500});
    this.characters.push({name: 'Krillin', power: 6000});
  }

  public ngOnInit(): void {
  }

  public save(): void{
    if( this.newCharacter.name.trim().length === 0 ){ return; }
    this.characters.push( this.newCharacter );
  }
}

interface Character{
  name: string,
  power: number
}
