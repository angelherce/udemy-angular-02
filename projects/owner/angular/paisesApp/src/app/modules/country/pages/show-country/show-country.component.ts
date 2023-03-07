import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import {switchMap, tap} from 'rxjs';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.css']
})
export class ShowCountryComponent implements OnInit {

  public country: Country;
  public code: string;
  public isError: boolean = false;

  public constructor(
    private activateRoute: ActivatedRoute,
    private countryService: CountryService ) {}

  public ngOnInit(): void {
    this.activateRoute.params
      .pipe( switchMap( ({ id: code }) => {
        this.code = code;
        return this.countryService.searchByCode( code );
      }), tap( console.log ))
      .subscribe( {
        next: response => this.country = response,
        error: error => this.isError = error
      });
  }
}
