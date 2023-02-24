/*
    ===== Código de TypeScript =====
*/

function sumar( a: number, b: number ): number{
    return a + b;
}

const sumarFlecha = ( a: number, b: number ): number => a + b;

function multiplicar( numero: number, otroNumero?: number, base: number = 2 ): number{
    return numero * base;
}

const resultadoSuma: number = sumar( 10, 8 );
const resultadoSumaFlecha: number = sumarFlecha( 10, 8 );
const resultadoMultiplicacion01: number = multiplicar( 10, 8 );
const resultadoMultiplicacion02: number = multiplicar( 10, 8, 5 );

console.log( resultadoSuma, resultadoSumaFlecha, resultadoMultiplicacion01, resultadoMultiplicacion02 );