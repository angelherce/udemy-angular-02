import { Component, OnInit } from '@angular/core';
import { Character } from '../../model/character.model';
import { DbzService } from '../../service/dbz.service';

@Component({
  selector: 'dbz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title: string = 'Dragon Ball Z';

  public defaultCharacter: Character;

  public constructor( private dbzService: DbzService ) {
    this.defaultCharacter = {
      name: 'Pepe',
      power: 100000
    };
  }

  public ngOnInit(): void {
  }

  get characters(): Character[]{ return this.dbzService.getAll(); }
}
