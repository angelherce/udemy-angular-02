/*
    ===== Código de TypeScript =====
*/

const dbz: (string | string[])[] = [ 'Goku', 'Vegeta', 'Trunks', [ 'Pepe' ] ];
const [ p1, , p3, [ p4p1 ] ] = dbz;

console.log( `Personaje 01: ${p1}` );
console.log( `Personaje 03: ${p3}` );
console.log( `Personaje 04-01: ${p4p1}` );