import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.css']
})
export class ShowCountryComponent implements OnInit {

  public country: Country;

  public constructor(
    private activateRoute: ActivatedRoute,
    private countryService: CountryService ) {}

  public ngOnInit(): void {
    this.activateRoute.params
      .pipe( switchMap( ({ id: code }) => this.countryService.searchByCode( code ) ))
      .subscribe( response => {
        this.country = response;
        console.log('country', this.country)
      });
  }
}
