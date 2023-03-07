import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindByCapitalComponent } from './pages/find-by-capital/find-by-capital.component';
import { FindByCountryComponent } from './pages/find-by-country/find-by-country.component';
import { FindByRegionComponent } from './pages/find-by-region/find-by-region.component';
import { ShowCountryComponent } from './pages/show-country/show-country.component';



@NgModule({
  declarations: [
    FindByCapitalComponent,
    FindByCountryComponent,
    FindByRegionComponent,
    ShowCountryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FindByCapitalComponent,
    FindByCountryComponent,
    FindByRegionComponent,
    ShowCountryComponent
  ]
})
export class CountryModule { }
