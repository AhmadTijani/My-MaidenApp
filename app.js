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
        text: 'Take ou t trash',
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

/*const todoJSON = JSON.stringify(todos);
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
}*/


/*for(let todo of todos) {
    console.log(todo.id);
}*/

// forEach, map, filter

const todoText = todos.map(function(todo) {
    return todo.text;
})

console.log(todoText);

/*const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === false;


console.log(todoCompleted);*/

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);

/*let = 16 + 4 + "Volvo";
console.log('Volvo')

let Volvo;
Volvo = 16 + 4 + "Volvo"
console.log(Volvo)*/


//Conditionals

/*const x = 20;
if(x == 10) {
    console.log('x is 10');
} else {
    console.log('x is NOT 10');
}*/

/*const x = 20;
if(x === 10){
    console.log('x is 10');
} else if (x > 10) {
    console.log('x is greater than 10');
} else {
  console.log('x is less than 10');
}*/

/*const x = 4;
const y = 16;
if(x > 5 || y > 10){
    console.log('x is more than 5 or y is more than 10');
} */

/*const x = 6;
const y = 20;
if(x > 5 && y > 10){
    console.log('x is more than 5 or y is more than 10');
} */

/*const x = 12;
const color = x > 10 ? 'red' : 'green';
console.log(color); */

const x = 15;
const color = x > 10 ? 'red' : 'blue';
switch(color){
    case 'red' :
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

/*function addNums(num1, num2){
    console.log(num1+num2);
}
addNums(5, 3);*/

/*const addNums = (num1=1, num2=1)=> {
    return num1 + num2;
}
console.log(addNums(6,3));


const addNums = (num1=1, num2=1)=>num1 + num2;

console.log(addNums(6,4));*/

const addNums = num1 => num1 + 6;

console.log(addNums(6 ));


//Constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}

//Instantiate object
const person1 = new Person('John', 'Doe', '3-02-2021');
const person2 = new Person('Ada', 'Doe ', '3-02-2021');

console.log(person1)


