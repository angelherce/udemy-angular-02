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
  public isReseteable = false;

  public constructor() {
    console.log( 'Constructor !' );
    this.fill();
  }

  public ngOnInit(): void {
    console.log( 'ngOnInit !' );
  }

  public deleteFirst(): void{
    this.heroDeleted = this.heroes.shift() || '';
    this.checkReset();
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
    this.checkReset();
    this.heroDeleted = heroesDeleted;
  }

  public deleteLast(): void{
    this.heroDeleted = this.heroes.pop() || '';
    this.checkReset();
  }

  public invert(): void{
    let result: string[] = [];
    this.heroes.forEach( target => result.unshift( target ));
    this.heroes = result;
    this.checkReset();
    this.heroDeleted = '';
  }

  public fill(): void{
    this.deleteAll();
    this.heroDeleted = '';
    this.heroesBackup.forEach( target => this.heroes.push( target ));
    this.isReseteable = false;
  }

  public checkReset(): void{
    this.isReseteable = this.heroes.length !== this.heroesBackup.length;
    for( let i = 0 ; i < this.heroesBackup.length && !this.isReseteable ; i++ ){
      this.isReseteable = this.heroesBackup[ i ] !== this.heroes[ i ];
    }
  }
}
