import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../models/gif.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public constructor( private gifsService: GifsService ) { }

  public ngOnInit(): void {
  }

  get gifs(): Gif[]{
    return this.gifsService.gifs;
  }
}
