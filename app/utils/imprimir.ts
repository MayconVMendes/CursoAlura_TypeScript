import { Negociacao } from './../models/negociacao.js';
import { Imprivel } from './imprimivel.js';
export function imprimir(...objetos: Imprivel[]) {
    for (let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}