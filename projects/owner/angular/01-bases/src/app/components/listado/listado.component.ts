import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public heroDeleted: string = '';
  public heroesBackup: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public heroes: string[] = [];

  public constructor() {
    console.log( 'Constructor !' );
    this.fill();
  }

  public ngOnInit(): void {
    console.log( 'ngOnInit !' );
  }

  public deleteFirst(): void{
    this.heroDeleted = this.heroes.shift() || '';
  }

  public deleteAll(): void{
    let heroesDeleted = '';
    this.heroes.forEach( (target, index) => {
      if( index == 0 ){
        heroesDeleted = `${target}`
      }
      else{
        heroesDeleted = `${heroesDeleted}, ${target}`
      }
    });
    this.heroes = [];
    this.heroDeleted = heroesDeleted;
  }

  public deleteLast(): void{
    this.heroDeleted = this.heroes.pop() || '';
  }

  public invert(): void{
    let result: string[] = [];
    this.heroes.forEach( target => result.unshift( target ));
    this.heroes = result;
    this.heroDeleted = '';
  }

  public fill(): void{
    this.deleteAll();
    this.heroDeleted = '';
    this.heroesBackup.forEach( target => this.heroes.push( target ));
  }
}
