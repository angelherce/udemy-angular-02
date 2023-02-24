/*
    ===== Código de TypeScript =====
*/
interface Address {
    street: string;
    country: string;
    city: string;
}

interface SuperHeroe {
    name: string;
    year: number;
    address: Address;
    mostrarDireccion: () => string;
}

const superHeroe: SuperHeroe = {
    name: 'Spiderman',
    year: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    mostrarDireccion(){
        return `${this.name}, ${this.address.city}, ${this.address.country}`
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log( direccion );