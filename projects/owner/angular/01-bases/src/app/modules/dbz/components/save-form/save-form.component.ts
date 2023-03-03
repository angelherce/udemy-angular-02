import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../model/character.model';

@Component({
  selector: 'dbz-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css']
})
export class SaveFormComponent implements OnInit {

  public title: string = 'Añadir Personaje';

  @Input('default')
  public newCharacter: Character = {
    name: '',
    power: 0
  };

  @Output()
  public onSaveCharacter: EventEmitter<Character> = new EventEmitter();

  public constructor() {}

  public ngOnInit(): void {
  }

  public save(): void{
    if( this.newCharacter.name.trim().length === 0 ){ return; }
    this.onSaveCharacter.emit( this.newCharacter );
  }

}
