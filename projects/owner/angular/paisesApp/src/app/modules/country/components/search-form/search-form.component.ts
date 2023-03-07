import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Input()
  public title: string = `Buscar por País`;

  @Input()
  public placeholder: string = `Buscar País...`;

  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter();

  @Output()
  public onSubjects: EventEmitter<string> = new EventEmitter();

  @Input('error')
  public isError: boolean = false;

  @Input('list-countries')
  public countriesResponse: Country[] = [];

  public searchValue: string;

  public constructor() {}

  public ngOnInit(): void {}

  public search( value: string ): void{
    this.searchValue = value;
    this.onSearch.emit( value );
  }

  public subjects( value: string ): void{
    this.isError = false;
    this.onSubjects.emit( value );
  }
}