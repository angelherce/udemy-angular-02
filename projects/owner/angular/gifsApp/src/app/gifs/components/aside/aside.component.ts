import { Component, OnInit } from '@angular/core';
import {GifsService} from "../../services/gifs.service";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  public constructor( private gifsService: GifsService ) { }

  public ngOnInit(): void {
  }

  get history(): string[]{
    return this.gifsService.history;
  }

  public search( _value: string ):void{
    this.gifsService.search( _value );
  }
}
