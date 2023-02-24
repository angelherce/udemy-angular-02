/*
    ===== Código de TypeScript =====
*/

export interface Product {
    desc: string;
    price: number;
}

const phone: Product = {
    desc: 'Nokia A1',
    price: 150
}

const tablet: Product = {
    desc: 'IPad Air',
    price: 350
}

export function calcISV( products: Product[] ): [number, number]{
    let total = 0;
    products.forEach( ({ price }, index ) => {
       total += price;
    });

    return [total, total * 0.15];
}

const articles: Product[] = [ phone, tablet ];
const [total, isv] = calcISV( articles );
console.log( `TOTAL: ${total}, ISV: ${isv}` );