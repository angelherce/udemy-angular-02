/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volume: number;
    second: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const reproductor: Reproductor = {
    volume: 90,
    second: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const {volume: vol, second, song, details:{ author: authorDetail, year }} = reproductor;
// const {author, year} = details;

console.log( `El volumen actual es: ${vol}` );
console.log( `El segundo actual es: ${second}` );
console.log( `La canción actual es: ${song}` );
console.log( `El autor es: ${authorDetail}` );
console.log( `El año de la cación es: ${year}` );