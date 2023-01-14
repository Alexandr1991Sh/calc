let input1 = document.querySelector('.input-1');
let input2 = document.querySelector('.input-2');
let btn = document.querySelector('.btn');
let select = document.querySelector('.select');
let result = document.querySelector('.result');


btn.onclick = () => {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);

    if (select.value == '+') {
        result.innerHTML = num1 + num2;
    }
    else if (select.value == '-') {
        result.innerHTML = num1 - num2;
    }
    else if (select.value == '*') {
        result.innerHTML = num1 * num2;
    }
    else if (select.value == '/') {
        result.innerHTML = num1 / num2;
    }
}

function typeOfSum(a, b) {
    if(tupeof == 'number' + tupeof == 'number') console.log('number')
    }

    typeOfSum(10, 12);