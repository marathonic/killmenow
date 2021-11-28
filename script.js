const myScreen = document.querySelector('#screen');
myScreen.textContent = 0; 
let screen = myScreen.textContent;

const operators = document.querySelectorAll('.operator');

const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const times = document.querySelector('#times');
const division = document.querySelector('#division');

const digits = document.querySelectorAll('.numberinos');

const redAdd = (previousValue, nextValue) => previousValue + nextValue;
const redSub = (previousValue, nextValue) => previousValue - nextValue;
const redTimes = (previousValue, nextValue) => previousValue * nextValue;
const redDivide = (previousValue, nextValue) => previousValue / nextValue;
let a;
let b;
const array1 = [];

digits.forEach(digit => {

    digit.addEventListener('click', function(){
        if(myScreen.textContent == 0) {
            previousValue = myScreen.textContent;
            a = 0;
            myScreen.textContent = '';
        }
        
        if(myScreen.textContent == totalValue) myScreen.textContent = '';

        myScreen.textContent += digit.id;
        
    })
    
});

let accumulator = 0;
let newValue = 0;
let totalValue = 0;

operators.forEach(operator => {
    operator.addEventListener('click', function(){
        //YOU ONLY NEED THE TWO LAST NUMBERS IN THE ARRAY! YOU DON'T NEED TO DELETE THEM EACH INSTANCE!!! [0,1,2,3] get 3 + 2 = 5;
        newValue = +myScreen.textContent;

        accumulator = array1.reduce(function(a,b){
            return a+b;
        },0);

        array1.length = 0;
        array1.push(+accumulator);
        array1.push(+newValue)
 //       b.join everything into 1 single Number, that way the  array that's housing 1,2,3, becomes 123. Afterwards, proceed with getting the numbeer  in the screen;
    let total = array1.reduce(function(acc,curr){
        return acc + curr;
    },0);

    myScreen.textContent = total;
    totalValue = total;
    })
});

/* DEFINING FUNCTIONS
function add(x,y){
    return x + y;
}

const subtract = (x,y) => x-y;
*/