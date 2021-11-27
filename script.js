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

digits.forEach(digit => {

    digit.addEventListener('click', function(){
        if(myScreen.textContent == 0) {
            previousValue = myScreen.textContent;
            myScreen.textContent = '';
        }
        myScreen.textContent += digit.id;
    })
    
});

operators.forEach(operator => {
    operator.addEventListener('click', function(){
        
        previousValue = myScreen.textContent;
        myScreen.textContent

        if(operator.id == 'plus'){

            alert(operator.id);
        }
    })
});

/* DEFINING FUNCTIONS
function add(x,y){
    return x + y;
}

const subtract = (x,y) => x-y;
*/