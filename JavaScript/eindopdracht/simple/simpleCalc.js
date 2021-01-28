const display = document.getElementById('display');
let number1 = 0;
let number2 = 0;
let som = 0;
display.textContent = 0;

function checkInput(inputElement) {
    if (display.textContent === '0') {
        display.textContent = null;
    }
    
    switch (inputElement.textContent) {
        case '=':
            display.textContent = calc(som);
            break;
            case 'AC':
                reset();
                break;
        case '+/-':
            display.textContent=flip(display.textContent);
            break;

            case '+':
                number1 = display.textContent;
                som += number1;
            
        default:
            display.textContent+=inputElement.textContent;
            number1 = Number(display.textContent);
            console.log(inputElement.textContent);
            break;
    }
}
    

function calc(equation) {
    return eval(equation);
}
function resetDisplay() {
    display.textContent = 0;
}
function flip(params) {
    return params*=-1;
}