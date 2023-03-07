import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-find-by-country',
  templateUrl: './find-by-country.component.html',
  styleUrls: ['./find-by-country.component.css']
})
export class FindByCountryComponent implements OnInit {

  public title: string = `Buscar por País`;

  public searchCountryValue: string;

  public constructor( private countryService: CountryService ) {}

  public ngOnInit(): void {}

  public search(): void{
    this.countryService.searchByCountry( this.searchCountryValue )
      .subscribe( response => console.log( response ));
    this.searchCountryValue = null;
  }
}
