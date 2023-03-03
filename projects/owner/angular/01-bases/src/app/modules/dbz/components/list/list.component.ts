import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../model/character.model';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public title: string = 'Personajes';

  @Input('data')
  public characters: Character[] = [];

  public constructor() {}

  public ngOnInit(): void {
  }

}


