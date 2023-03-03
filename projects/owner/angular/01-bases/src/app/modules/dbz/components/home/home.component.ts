import { Component, OnInit } from '@angular/core';

interface Character{
  name: string,
  power: number
}

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
    console.log( "Hi World !" );
  }

  public changeName( event: any ): void{
    this.newCharacter.name = event.target.value;
    console.log( event )
  }
}
