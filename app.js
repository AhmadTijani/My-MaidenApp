// string, Numbers, Boolean, Null, Undefined, Symbol

/*const name ='John';
const age = 30;
const rating = 5.4;
const isCool = true;
const x =null;
const y = undefined;
let z;

//concatenation
console.log('My name is' +name+ 'and i am' +age); 
//Template string
console.log(`My name is ${name} and i am ${age}`);

console.log('hello');

const s = 'Hello World'

console.log(s.split('')) */

//Arays - variables that hold multiples values 

const numbers = new Array(1,2,3,4,5);

console.log(numbers);

const books = ['Bible', 'dictioonary', 'love' , 1 , 2, true,];

console.log(books);

/*const numbers = ['1' , '2' , '3']

console.log(numbers)*/

const fruits =['apples', 'oranges', 'mango', 'pineaplle'];

fruits[4] ='cabbage';

fruits.push('mangos');

fruits.unshift('strawberries');

fruits.pop();

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('strawberries'))

console.log(fruits);


