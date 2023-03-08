import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  @Input()
  public placeholder: string;

  @Input()
  public subjects: InputSubject[] = [];

  @Output()
  public onEnter: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<SubjectData> = new EventEmitter();

  private debouncer: Subject<string> = new Subject();

  public searchCountryValue: string;

  public subjectsLimit: number = 5;

  public constructor() {}

  public ngOnInit(): void {
    this.debouncer.subscribe( value => this.onDebounce.emit( {value, 'limit': this.subjectsLimit} ));
  }

  public search(): void{
    if( this.searchCountryValue.trim().length > 0 ) {
      this.onEnter.emit(this.searchCountryValue.toLowerCase());
      this.searchCountryValue = null;
      this.subjects = [];
    }
  }

  public handleKeyDown(): void{
    if( this.searchCountryValue.trim().length > 0 ) {
      this.debouncer.next( this.searchCountryValue.toLowerCase() );
    }
    else{
      this.subjects = [];
    }
  }

  public setSearchFromSubject( value: string ): void{
    this.searchCountryValue = value.split( '|' )[0].trim();
    this.search();
  }
}

export interface SubjectData {
  value: string,
  limit: number
}

export interface InputSubject {
  id: any,
  value: string
}
