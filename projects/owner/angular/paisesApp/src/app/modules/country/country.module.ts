import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FindByCapitalComponent } from './pages/find-by-capital/find-by-capital.component';
import { FindByCountryComponent } from './pages/find-by-country/find-by-country.component';
import { FindByRegionComponent } from './pages/find-by-region/find-by-region.component';
import { ShowCountryComponent } from './pages/show-country/show-country.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { TableCountriesComponent } from './components/table-countries/table-countries.component';
import { SearchFormComponent } from './components/search-form/search-form.component';




@NgModule({
  declarations: [
    FindByCapitalComponent,
    FindByCountryComponent,
    FindByRegionComponent,
    ShowCountryComponent,
    InputSearchComponent,
    TableCountriesComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    FindByCapitalComponent,
    FindByCountryComponent,
    FindByRegionComponent,
    ShowCountryComponent
  ]
})
export class CountryModule { }
