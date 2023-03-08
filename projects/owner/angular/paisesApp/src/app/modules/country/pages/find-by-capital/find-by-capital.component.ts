import { Component, OnInit } from '@angular/core';
import {Country} from "../../interfaces/country.interface";
import {CountryService} from "../../services/country.service";

@Component({
  selector: 'app-find-by-capital',
  templateUrl: './find-by-capital.component.html',
  styleUrls: ['./find-by-capital.component.css']
})
export class FindByCapitalComponent implements OnInit {

  public title: string = `Buscar por Capital`;
  public placeholder: string = `Buscar Capital...`;
  public isError: boolean = false;
  public countriesResponse: Country[] = [];
  public subjects: string[] = [];

  public constructor( private countryService: CountryService ) {}

  public ngOnInit(): void {}

  public search( value: string ): void{
    this.isError = false;

    this.countryService.searchByCapital( value )
      .subscribe( {
        next: response => this.countriesResponse = response,
        error: error => this.isError = true
      });
  }

  public getSubjects( value: string ): void{
    this.isError = false;

    this.countryService.searchByCapital( value )
      .subscribe( {
        next: response => this.subjects = response.map( target => {
          let result = ``;
          target.capital.forEach( capital => result = `${capital} |`);
          result = result.substring( 0, result.length-1 ).trim();
          return result;
        }),
        error: error => this.isError = true
      });
  }
}
