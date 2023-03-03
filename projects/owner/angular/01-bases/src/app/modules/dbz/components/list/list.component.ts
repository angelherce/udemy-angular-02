import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public title: string = 'Personajes';
  public characters: Character[] = [];

  public constructor() {
    this.characters.push({name: 'Goku', power: 15000});
    this.characters.push({name: 'Vegeta', power: 12500});
    this.characters.push({name: 'Krillin', power: 6000});
  }

  public ngOnInit(): void {
  }

}

interface Character{
  name: string,
  power: number
}
