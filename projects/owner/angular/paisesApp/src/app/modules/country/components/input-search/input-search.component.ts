import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  @Input()
  public placeholder: string;

  @Input()
  public subjects: string[] = [];

  @Output()
  public onEnter: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  private debouncer: Subject<string> = new Subject();

  public searchCountryValue: string;

  public constructor() {}

  public ngOnInit(): void {
    this.subjects = this.subjects.splice( 0, 5 );
    this.debouncer/*.pipe( debounceTime( 300 ) )*/.subscribe( value => this.onDebounce.emit( value ));
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
