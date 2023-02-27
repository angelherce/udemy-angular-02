import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Contador App';
  public counter: number = 0;
  public base: number = 5;

  public add( value: number ): void{
    this.counter += value;
  }
}
