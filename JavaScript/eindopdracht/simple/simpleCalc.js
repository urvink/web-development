let display = document.getElementById('display');
let number1 = [];
let number2 = [];
let equation = [];
let numberToggle = true;
let memory;


function checkInput(inputElement) {
    switch (inputElement.getAttribute('class')) {
        case 'numbers':
            if (numberToggle) {
                appendToNumber(number1, inputElement);
                equation.push(number1.join(''));
                console.log(`Number 1: ${number1.join('')}`);
            }else{
                appendToNumber(number2, inputElement);
                equation.push(number2.join(''));
                console.log(`Number 2: ${number2.join('')}`);
            }
            break;
        case 'operators':
            if (inputElement.textContent === '=') {

                show('display', calculate());
            }
            appendOpToEquation(inputElement);
            numberToggle = false;
            break;    
        default:
            throw new Error('The Class selected is NOT valid!!');
            break;
    }
}

/**
 * Calculate the solution!
 */
function calculate() {
    // console.log(eval(equation.join('')));
    show('display', eval(equation.join('')));
    

    // display.textContent = eval(equation);
}

/**
 * Append the clicked button to the screen
 */
function appendToNumber(number, numberElement) {
    number.push(Number(numberElement.textContent));
    
}

function appendOpToEquation(operatorElement) {
    console.log(`Operator: ${operatorElement.textContent}`);
    equation.push(operatorElement.textContent);
}

function resetInput() {
    display.textContent = 0;
    console.log(memory);
    memory = equation;
    show('memory', memory);
    equation = [];
    number1 = [];
    number2 = [];
}

function show(outputToElement, ...output) {
    if (outputToElement ==='memory') {
        document.getElementById('memory').textContent = output;
    }else if(outputToElement === 'display'){
        console.log(`Equation: ${equation.join('')}`);
        display.textContent = `${equation.join('')} = ${eval(equation.join(''))}`;
    }else{
        throw new Error('The output element is invalid');
    }
}