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

  @Output()
  public onEnter: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  private debouncer: Subject<string> = new Subject();

  public searchCountryValue: string;

  public constructor() {}

  public ngOnInit(): void {
    this.debouncer.pipe( debounceTime( 300 ) ).subscribe( value => this.onDebounce.emit( value ));
  }

  public search(): void{
    this.onEnter.emit( this.searchCountryValue );
    this.searchCountryValue = null;
  }

  public handleKeyDown(): void{
    this.debouncer.next( this.searchCountryValue );
  }
}
