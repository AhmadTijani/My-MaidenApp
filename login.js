/*console.log(window);

alert(1);*/ 

//Single element
/*console.log(document.getElementById('my-form'))*/

/*const form = document.getElementById('my-form');

console.log(form)*/

/*console.log(document.querySelectorAll('.container')); */


 //Multiple element
// console.log(document.querySelectorAll('.item'));
 
//console.log(document.getElementsByClassName('item'))

//console.log(document.getElementsByTagName('li'))

//const items = document.querySelectorAll('.item');

//items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

ul.remove();

//ul.firstElementChild.remove();

ul.firstElementChild.textContent = 'Hello World';
ul.children[1].innerText = 'I am the latest Developer';
ul.lastElementChild.innerHTML = '<h3>Tumb Up</h3>';

//const btn = document.querySelector('.btn')

//btn.style.background ='green';

/*const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.className);
});*/

/*const btn = document.querySelector('.btn');
btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#my-form')
    .style.background ='#ccc';
    document.querySelector('body').classList.add('bg-dark');
   // document.querySelector('.items').lastElementChild.textContent = 'Hi';
});*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    //console.log(nameInput.value);
    if(nameInput.value === '' || emailInput.value === '') {
    //alert('Please enter fields');
      msg.classList.add('error');
      msg.innerHTML = 'Please enter all fields';

      setTimeout(() => msg.remove(), 2000);
    } else {
        //console.log('success');
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

      userList.appendChild(li);

      // clear fields
      nameInput.value = '';
      emailInput.value = '';
    }
}