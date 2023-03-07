import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  public searchCountryValue: string;

  public constructor() {}

  public ngOnInit(): void {}

  public search(): void{}
}
