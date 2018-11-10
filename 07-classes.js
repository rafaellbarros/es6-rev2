class Pessoa {
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

const pessoa = new Pessoa('Rafael', '1.88', 'M');

console.log('Pessoa -> ', pessoa);
console.log('Nome -> ', pessoa.nome);
console.log('Sexo -> ', pessoa.sexo);

pessoa.altura = '1.98';

console.log('Altura -> ', pessoa.altura);