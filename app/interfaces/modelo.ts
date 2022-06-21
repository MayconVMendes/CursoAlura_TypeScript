import { Imprivel } from '../utils/imprimivel.js';
import { Comparavel } from './comparavel.js';
export interface Modelo<T> extends Imprivel, Comparavel<T> {

}