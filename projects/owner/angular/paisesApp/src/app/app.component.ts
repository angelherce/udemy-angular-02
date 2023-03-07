import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title: string = 'Paises App';
  public author: string = 'Àngel Herce Soto';

  public constructor() {}
}
