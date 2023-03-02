import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent{
  public heroe: string = 'IronMan';
  public age: number = 45;

  get nameUppercase(){
    return this.heroe.toUpperCase();
  }

  public getName(): string{
    return `${this.heroe} - ${this.age}`;
  }

  public changeHeroe(): void{
    this.heroe = 'Spiderman';
  }

  public changeAge(): void{
    this.age = 30;
  }
}
