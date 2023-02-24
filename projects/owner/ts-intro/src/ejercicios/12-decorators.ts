/*
    ===== Código de TypeScript =====
*/

function ClassDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
){
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'Override';
    }
}

@ClassDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    public imprimir(): void{
        console.log( 'Hi World !' );
    }
}

const miClase: MiSuperClase = new MiSuperClase();
console.log( MiSuperClase );
console.log( miClase );