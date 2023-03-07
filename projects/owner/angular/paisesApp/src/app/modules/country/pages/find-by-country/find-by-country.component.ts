import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-by-country',
  templateUrl: './find-by-country.component.html',
  styleUrls: ['./find-by-country.component.css']
})
export class FindByCountryComponent implements OnInit {

  public title: string = `Buscar por País`;

  public searchCountryValue: string;

  public constructor() {}

  public ngOnInit(): void {}

  public search(): void{
    alert( this.searchCountryValue );
    this.searchCountryValue = null;
  }
}
