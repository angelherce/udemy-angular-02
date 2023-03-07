import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-table-countries',
  templateUrl: './table-countries.component.html',
  styleUrls: ['./table-countries.component.css']
})
export class TableCountriesComponent implements OnInit {

  @Input('data')
  public listCountries: Country[] = [];

  public constructor() {}

  public ngOnInit(): void {}
}
