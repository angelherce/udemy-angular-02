/*
    ===== Código de TypeScript =====
*/

interface Heroe {
    name: string;
    hp: number;
    mostrarHp: () => void;
}

function curar( personaje: Heroe, hp: number ): void {
    personaje.hp += hp;
}

const nuevoPersonaje: Heroe = {
    name: 'Strider',
    hp: 50,
    mostrarHp(){
        console.log( `Puntos de vida: ${this.hp}` );
    }
}

curar( nuevoPersonaje, 50 );
nuevoPersonaje.mostrarHp();