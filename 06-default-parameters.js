// valorers padrão devem ser declarados no final
function test(param1, param2 = 'padrao') {
    if (param2 === 'padrao') {
        console.log('faça alguma coisa!');
    }
}

test('valor');

function funcao(param1, isAlgumaCoisa = true) {

}

funcao(50);