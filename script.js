const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const counter = document.getElementById('counter');
const increment2 = document.getElementById('increment2');
const decrement2 = document.getElementById('decrement2');
const counter2 = document.getElementById('counter2');
const totalCount = document.getElementById('totalCount');

let count = 0
let count2 = 0
increment.addEventListener('click', () => {
    count++
    counter.innerText = count;  
})

decrement.addEventListener('click', () => {
    count--
    counter.innerText = count;
})

increment2.addEventListener('click', () => {
    count2++
    counter2.innerText = count2;
     
})

decrement2.addEventListener('click', () => {
    count2--
    counter2.innerText = count2;
})



