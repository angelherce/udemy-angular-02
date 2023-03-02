/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    name: string;
    children?: string[];
}

const pasajero01: Pasajero = {
    name: 'Fernando'
}

const pasajero02: Pasajero = {
    name: 'Fernando',
    children: [ 'Natalia', 'Gabriel']
}

function showChildren( pasajero: Pasajero ): void{
    const totalChildren: number = pasajero.children?.length || 0;
    console.log( totalChildren );
}

showChildren( pasajero02 );
showChildren( pasajero01 );