import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { SaveFormComponent } from './components/save-form/save-form.component';
import { DbzService } from './service/dbz.service';



@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    SaveFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
