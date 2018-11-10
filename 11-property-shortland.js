let firstName = 'Rafael';
let lastName = 'Barros';

/* old
let obj = {
    firstName: firstName,
    lastName: lastName
}
*/

let obj = {
    firstName,
    lastName,
    method(param1, param2) {
        return param1 + param2;
    },
    funcao: function(x, y) {
        return x + y;
    },
    funcao2: (x, y) => console.log(x + y)
}

// poucas proriedades
function funcao({firstName, lastName}) {
    console.log(firstName, lastName);
}

funcao(obj);
obj.funcao2(2,2);
console.log(obj.method(2,3));