/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>( arg: T ): T{
    return arg;
}

let soyString: string = queTipoSoy<string>( 'Hi World !' );
let soyNumber: number = queTipoSoy<number>( 5 );
let soyBooleanArray: boolean[] = queTipoSoy<boolean[]>( [true, false] );