import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>{{title}}</h2>

    <h3>La base es: <strong>{{base}}</strong></h3>

    <button (click)="add( +base )">+{{base}}</button>
    <span>{{counter}}</span>
    <button (click)="add( -base )">-{{base}}</button>
  `
})
export class CounterComponent {
  public title: string = 'Counter Name';
  public counter: number = 0;
  public base: number = 5;

  public add( value: number ): void{
    this.counter += value;
  }
}
