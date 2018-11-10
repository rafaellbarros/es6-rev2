/*
function funcao(param1, param2) {
    var args = Array.prototype.slice.call(arguments, funcao.length);
    console.log(args);
}
*/

function funcao(param1, param2, ...otherParameters) {
    console.log(otherParameters);
}

funcao(1,2,3,4,5,6);

let array1 = [1, 2, 3, 4];

let array2 = [5, 6, 7, 8, ...array1];

console.log(array2);

let string = 'Rafael Barros';

let stringArray = [...string];

console.log(stringArray);