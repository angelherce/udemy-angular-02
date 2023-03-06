import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';
import { AsideComponent } from './components/aside/aside.component';



@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    ListComponent,
    AsideComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class GifsModule { }
