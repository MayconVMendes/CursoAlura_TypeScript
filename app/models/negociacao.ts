export class Negociacao {

    constructor(
        public readonly data: Date, 
        public readonly quantidade: number, 
        public readonly _valor: number
    ) {}

    get volume(): number{
        return this.quantidade * this.valor
    }
}