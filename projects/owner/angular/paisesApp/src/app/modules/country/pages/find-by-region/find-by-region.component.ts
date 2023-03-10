import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-find-by-region',
  templateUrl: './find-by-region.component.html',
  styleUrls: ['./find-by-region.component.css']
})
export class FindByRegionComponent implements OnInit {

  public title: string = `Buscar por Región`;
  public placeholder: string = `Buscar Región...`;
  public isError: boolean = false;
  public countriesResponse: Country[] = [];
  // public regions: string[] = [ 'EU', 'EFTA', 'CARICOM', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC' ];
  public regions: string[] = [ 'africa', 'americas', 'asia', 'europe', 'oceania' ];

  public constructor( private countryService: CountryService ) {}

  public ngOnInit(): void {}

  public search( value: string ): void{
    this.isError = false;

    this.countryService.searchByRegion( value )
      .subscribe( {
        next: response => this.countriesResponse = response,
        error: error => this.isError = true
      });
  }
}
