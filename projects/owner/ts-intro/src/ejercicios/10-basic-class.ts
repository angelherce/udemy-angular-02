/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    public constructor(
        public name: string,
        public year: number,
        public address: string
    ) {
        console.log( 'Hey !!' );
    }
}

class SHeroe extends PersonaNormal{
    public constructor(
        private alter: string,
        name: string,
        year: number,
        address: string = null ){

        super( name, year, address );
    }
}

const spiderman: PersonaNormal = new SHeroe('SpiderMan', 'Peter Parker', 30, 'Main St' );
const ironman: PersonaNormal = new SHeroe('IronMan', 'Tony Stark', 45 );

console.log( spiderman );
console.log( ironman );
