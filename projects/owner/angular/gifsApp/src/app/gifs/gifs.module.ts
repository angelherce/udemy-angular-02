import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { AsideComponent } from './aside/aside.component';



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
