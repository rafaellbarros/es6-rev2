let array = [1, 2, 3, 4, 5, 6];

let obj = {
    firstName: 'Rafael',
    lastName: 'Barros'
}

let arrayObjs = [
    { nome: 'test1'},
    { nome: 'test2'},
    { nome: 'test3'},
];

/** old
for (let i in array) {
    console.log(i, array[i]);
}

for (let i in obj) {
    console.log(i, obj[i]);
}

for (let i in arrayObjs) {
    let obj = arrayObjs[i];
    console.log(i, obj);
}

*/

for (let value of array) {
    console.log(value);
}

let keys = Object.keys(obj);
for (let key of keys) {
    console.log(obj[key]);
}

for (let [index, value] of arrayObjs.entries()) {
    console.log(index, value);
}