/*
    ===== Código de TypeScript =====
*/

interface Personaje {
    name: string;
    hp: number;
    habilidades: string[];
    publoNatal?: string;
}

const personaje: Personaje = {
    name: 'Strider',
    hp: 100,
    habilidades: [ 'Bash', 'Counter', 'Healing' ]
}

console.table( personaje );