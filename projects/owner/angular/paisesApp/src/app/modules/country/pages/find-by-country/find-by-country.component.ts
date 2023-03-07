import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-find-by-country',
  templateUrl: './find-by-country.component.html',
  styleUrls: ['./find-by-country.component.css']
})
export class FindByCountryComponent implements OnInit {

  public title: string = `Buscar por País`;

  public searchCountryValue: string;
  public lastSearchCountryValue: string;

  public isError: boolean = false;

  public countriesResponse: Country[] = [];

  public constructor( private countryService: CountryService ) {}

  public ngOnInit(): void {}

  public search(): void{
    this.isError = false;
    this.lastSearchCountryValue = this.searchCountryValue;

    this.countryService.searchByCountry( this.searchCountryValue )
      .subscribe( {
        next: response => this.countriesResponse = response,
        error: error => this.isError = true
      });

    this.searchCountryValue = null;
  }
}
