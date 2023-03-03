import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dbz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title: string = 'Dragon Ball Z';

  public constructor() { }

  public ngOnInit(): void {
  }

  public save(): void{
    console.log( "Hi World !" );
  }
}
