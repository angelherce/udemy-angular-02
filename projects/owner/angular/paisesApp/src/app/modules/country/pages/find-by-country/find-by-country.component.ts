import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { InputSubject, SubjectData } from '../../components/input-search/input-search.component';

@Component({
  selector: 'app-find-by-country',
  templateUrl: './find-by-country.component.html',
  styleUrls: ['./find-by-country.component.css']
})
export class FindByCountryComponent implements OnInit {

  public title: string = `Buscar por País`;
  public placeholder: string = `Buscar País...`;
  public isError: boolean = false;
  public countriesResponse: Country[] = [];
  public subjects: InputSubject[] = [];

  public constructor( private countryService: CountryService ) {}

  public ngOnInit(): void {}

  public search( value: string ): void{
    this.isError = false;

    this.countryService.searchByCountry( value )
      .subscribe( {
        next: response => this.countriesResponse = response,
        error: error => this.isError = true
      });
  }

  public getSubjects( data: SubjectData ): void{
    this.isError = false;

    this.countryService.searchByCountry( data.value )
      .subscribe( {
        next: response => this.subjects = response.splice(0, data.limit ).map( target => { return { 'id': target.cca2, 'value': target.name.common }; }),
        error: error => this.isError = true
      });
  }
}
