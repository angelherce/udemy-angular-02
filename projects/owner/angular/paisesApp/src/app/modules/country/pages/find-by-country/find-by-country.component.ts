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
  public placeholder: string = `Buscar País...`;

  public searchCountryValue: string;

  public isError: boolean = false;

  public countriesResponse: Country[] = [];

  public constructor( private countryService: CountryService ) {}

  public ngOnInit(): void {}

  public search( value: string ): void{
    this.isError = false;
    this.searchCountryValue = value;

    this.countryService.searchByCountry( value )
      .subscribe( {
        next: response => this.countriesResponse = response,
        error: error => this.isError = true
      });
  }

  public subjects( value: string ): void{
    this.isError = false;
  }
}
