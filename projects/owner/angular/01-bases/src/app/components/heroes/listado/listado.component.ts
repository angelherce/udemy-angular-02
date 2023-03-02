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
    if( this.heroes.length > 0 ) {
      this.addHeroDeleted( this.heroes.shift() || '' );
      this.checkReset();
    }
  }

  public deleteAll(): void{
    this.heroes.forEach( target => this.addHeroDeleted( target ));
    this.heroes = [];
    this.checkReset();
  }

  public deleteLast(): void{
    if( this.heroes.length > 0 ) {
      this.addHeroDeleted( this.heroes.pop() || '' );
      this.checkReset();
    }
  }

  public addHeroDeleted( hero: string ): void{
    if( this.heroDeleted.length > 0 ){
      hero = `, ${hero}`;
    }
    this.heroDeleted = `${this.heroDeleted}${hero}`;
  }

  public invert(): void{
    let result: string[] = [];
    this.heroes.forEach( target => result.unshift( target ));
    this.heroes = result;
    this.checkReset();
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
