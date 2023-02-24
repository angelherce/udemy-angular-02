/*
    ===== Código de TypeScript =====
*/

class S1Heroe {
    private alter: string;
    public year: number;
    public name: string;

    public constructor( alter: string, year: number, name: string ){
        console.log( 'Hey !!' );
        this.alter = alter;
        this.year = year;
        this.name = name;
    }
}

class S2Heroe {
    public constructor(
        private alter: string,
        public year: number,
        public name: string ){

        console.log( 'Hey !!' );
    }
}

const spiderman: S1Heroe = new S1Heroe('SpiderMan', 30, 'Peter Parker' );
const ironman: S2Heroe = new S2Heroe('IronMan', 45, 'Tony Stark' );

console.log( spiderman );
console.log( ironman );
