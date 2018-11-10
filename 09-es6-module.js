export class Pessoa {
    constructor(nome, altura, sexo) {
        this.nome = nome;
        this._altura = altura;
        this.sexo = sexo;
    }

    getAltura() {
        return this._altura;
    }

    // encapsulamento
    get altura() {
        return this._altura;
    }

    set altura(value) {
        this._altura = value;
    }
}

export let valor = 'Rafael';