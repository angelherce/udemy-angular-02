import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    SearchComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    SearchComponent
  ]
})
export class SharedModule { }
