/*
    ===== Código de TypeScript =====
*/

import { calcISV, Product } from './08-args-destructured';

const carritoCompras: Product[] = [
    { desc: 'Telefono 01', price: 100 },
    { desc: 'Telefono 02', price: 150 }
];

const [total, isv] = calcISV( carritoCompras );
console.log( `TOTAL: ${total}, ISV: ${isv}` );