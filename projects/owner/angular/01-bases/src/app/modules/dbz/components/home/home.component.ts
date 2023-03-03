import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dbz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title: string = 'Dragon Ball Z';

  public newCharacter: Character = {
    name: 'Trunks',
    power: 14000
  }

  public constructor() { }

  public ngOnInit(): void {
  }

  public save(): void{
    console.log( this.newCharacter );
  }
}

interface Character{
  name: string,
  power: number
}
