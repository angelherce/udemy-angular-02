import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild( 'inputSearch' )
  public inputSearch!: ElementRef<HTMLInputElement>;

  public constructor() { }

  public ngOnInit(): void {
  }

  public search(): void{
    console.log( this.inputSearch.nativeElement.value );
    this.inputSearch.nativeElement.value = '';
  }
}
