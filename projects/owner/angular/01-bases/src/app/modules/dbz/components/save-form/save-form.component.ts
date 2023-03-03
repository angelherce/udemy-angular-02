import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../model/character.model';
import {DbzService} from "../../service/dbz.service";

@Component({
  selector: 'dbz-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css']
})
export class SaveFormComponent implements OnInit {

  public title: string = 'Añadir Personaje';

  public emptyCharacter: Character = {name: '', power: 0};
  @Input('default')
  public newCharacter: Character = {...this.emptyCharacter};

  public constructor( private dbzService: DbzService ) {}

  public ngOnInit(): void {
  }

  public save(): void{
    if( this.newCharacter.name.trim().length === 0 ){ return; }
    this.dbzService.save( {...this.newCharacter} );
    this.newCharacter = {...this.emptyCharacter};
  }

}
