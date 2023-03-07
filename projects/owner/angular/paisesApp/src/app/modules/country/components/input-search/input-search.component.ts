import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

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

  public searchCountryValue: string;

  public constructor() {}

  public ngOnInit(): void {}

  public search(): void{
    this.onEnter.emit( this.searchCountryValue );
    this.searchCountryValue = null;
  }
}
