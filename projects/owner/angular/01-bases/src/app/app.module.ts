import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './modules/heroes/heroes.module';
import { CounterModule } from './modules/counters/counter.module';
import { DbzModule } from './modules/dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    CounterModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
