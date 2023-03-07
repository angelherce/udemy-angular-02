import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {GifsService} from "../../services/gifs.service";

@Component({
  selector: 'gifs-search-form',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild( 'inputSearch' )
  public inputSearch!: ElementRef<HTMLInputElement>;

  public constructor( private gifsService: GifsService ) { }

  public ngOnInit(): void {
  }

  public search(): void{
    this.gifsService.search( this.inputSearch.nativeElement.value );
    this.inputSearch.nativeElement.value = '';
  }
}
