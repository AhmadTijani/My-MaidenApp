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

console.log(fruits.indexOf('strawberries'));

console.log(fruits);

const cars =['corrola', 'Honda', 'Mazda'];

cars[3] ='Benz';

console.log(cars);

const person= {
    firstName: 'John',
    lastName: 'David',
    age: '21',
    hobbies: ['reading', 'dancing', 'football'],
    address:{
        street: '2 Ikoyi crescent',
        city: 'Ikoyi',
        state: 'Lagos, Nigeria',
    }
}

/*console.log(person.lastName, person.firstName);
console.log(person.address.city);*/

/*const { firstName, lastName , address: {city}} = person;

console.log(city);*/

person.email = 'john@yahoo.com';

console.log(person);

const todos =[
    {
        id: 1,
        text: 'Take ot trash',
        isCompleted: true
    },
    {
        id: 1,
        text: 'Meeting with the boss',
        isCompleted: false
    },
    {
        id: 1,
        text: 'Marketing our products',
        isCompleted: true
    },
];

/*console.log(todos[2].text);*/

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For
for(let i=0; i<=10; i++) {
    console.log(`For Loop Number: ${i}`);
}

// While
let i=0;
while(i<10) {
    console.log(`while loop Number: ${i}`);
    i++;
}
