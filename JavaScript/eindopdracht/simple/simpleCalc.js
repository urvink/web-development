const display = document.getElementById('display');
let number1 = 0;
let number2 = 0;
let som = 0;
display.textContent = 0;

function checkInput(inputElement) {
    console.log(inputElement);

    if (display.textContent === '0') {
        display.textContent = null;
    }

    switch (inputElement.textContent) {
        case '=':
            display.textContent = calc(display.textContent);
            break;
        case 'AC':
            reset();
            break;
        case '+/-':
            
            flip(inputElement);
            break;
        case '+':
            appendToScreen(inputElement);
            break;
        case '-':
            appendToScreen(inputElement);
            break;
        case '*':
            appendToScreen(inputElement);
            break;
        case '/':
            appendToScreen(inputElement);
            break;
        default:
            appendToScreen(inputElement);
            break;
    }
}

function appendToScreen(obj) {
    display.textContent+=obj.textContent;
    logger(obj.textContent);
}

function logger(data) {
    console.log(data);
}

function calc(equation) {
    logger(equation);
    return eval(equation);
}
function resetDisplay() {
    display.textContent = 0;
}
function flip(params) {
    return params*=-1;
}