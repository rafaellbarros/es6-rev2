let array = [1, 2, 3, 4, 5, 6];

/*
let newArray = array.map(function (value) {
    return value * 10;
});
*/

// let newArray =  array.map(value => value * 10);

let newArray =  array.map((value, index) => { 
    console.log('index -> ', index);
    return value * 10;
});

console.log(newArray);

let soma = (param1, param2) => param1 + param2;

console.log('resultado -> ', soma(2,2));