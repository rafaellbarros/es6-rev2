// api Intl

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat

const date = new Date();

// const newDatePtBr = new Intl.DateTimeFormat('pt-BR').format(date);
const newDatePtBr = new Intl.DateTimeFormat('pt-BR', {month: 'long', day: 'numeric', year: 'numeric'}).format(date);
const newDateEnUs = new Intl.DateTimeFormat('en-US').format(date);

console.log(newDatePtBr); // dd/mm/yyyy
console.log(newDateEnUs); // mm/dd/yyyy

// const newNumberPtBr = new Intl.NumberFormat('pt-BR').format(2000.22);
// const newNumberPtBr = new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2}).format(2000);
const newNumberPtBr = new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2, currency: 'BRL', style: 'currency'}).format(2000.33333333);
const newNumberEnUs = new Intl.NumberFormat('en-US').format(2000.22);

console.log(newNumberPtBr);
console.log(newNumberEnUs);