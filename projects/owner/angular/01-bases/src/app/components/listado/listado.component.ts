import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public constructor() {
    console.log( 'Constructor !' );
  }

  public ngOnInit(): void {
    console.log( 'ngOnInit !' );
  }

}
