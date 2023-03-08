import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindByCountryComponent } from './modules/country/pages/find-by-country/find-by-country.component';
import { FindByRegionComponent } from './modules/country/pages/find-by-region/find-by-region.component';
import { FindByCapitalComponent } from './modules/country/pages/find-by-capital/find-by-capital.component';
import { ShowCountryComponent } from './modules/country/pages/show-country/show-country.component';

const routes: Routes = [
  { path: '', redirectTo: 'find-by-country', pathMatch: 'full' },
  { path: 'find-by-country', component: FindByCountryComponent, pathMatch: 'full' },
  { path: 'find-by-region', component: FindByRegionComponent, pathMatch: 'full' },
  { path: 'find-by-capital', component: FindByCapitalComponent, pathMatch: 'full' },
  { path: 'show-country/:id', component: ShowCountryComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
