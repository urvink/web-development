let display = document.getElementById('display');
let number1 = [];
let number2 = [];
let equation = [];
let numberToggle = true;
let operatorToggle = true;
let digitFlipToggle = false;
let memory;



function checkInput(inputElement) {
    switch (inputElement.getAttribute('class')) {
        case 'numbers':
            if (numberToggle) {
                appendToNumber(number1, inputElement);
                show('display', number1.join(''));
                // equation.push(number1.join(''));
                console.log(`Number 1: ${number1.join('')}`);
            }else{
                appendToNumber(number2, inputElement);
                // equation.push(number2.join(''));
                console.log(`Number 2: ${number2.join('')}`);
                show('display', number2.join(''));
            }
            break;
        case 'operators':
            switch (inputElement.textContent) {
                case '=':
                    equation.push(number2.join(''));
                    show('display', number2);
                    console.log(number2.join(''));
                    show('display', calculate());
                    // resetInput();
                    break;
                case '+':
                    //Number Toggle: False == number1, True == number2
                    if (numberToggle === false) {
                        throw new Error('Only 2 digits supported');
                    } else {
                        equation.push(number1.join(''));
                        show('display', number1);
                        numberToggle = toggler(numberToggle);
                    }                    
                        //Operator Toggle: False == 1 operator, True == not allowed (new Error)
                    if (operatorToggle === false) {
                        throw new Error(`You may only use 2 digits`);
                    } else {
                        appendOpToEquation(inputElement);
                        show('display', equation.join(''));
                        operatorToggle = toggler(operatorToggle);
                        // equation.push(number2.join(''));
                    }                    
                    break;
                case '-':
                    //Number Toggle: False == number1, True == number2
                    if (numberToggle === false) {
                        throw new Error('Only 2 digits supported');
                    } else {
                        equation.push(number1.join(''));
                        show('display', number1);
                        numberToggle = toggler(numberToggle);
                    }                    
                        //Operator Toggle: False == 1 operator, True == not allowed (new Error)
                    if (operatorToggle === false) {
                        throw new Error(`You may only use 2 digits`);
                    } else {
                        appendOpToEquation(inputElement);
                        show('display', equation.join(''));
                        operatorToggle = toggler(operatorToggle);
                        // equation.push(number2.join(''));
                    }
                    break;
                case '*':
                    //Number Toggle: False == number1, True == number2
                    if (numberToggle === false) {
                        throw new Error('Only 2 digits supported');
                    } else {
                        equation.push(number1.join(''));
                        numberToggle = toggler(numberToggle);
                    }                    
                        //Operator Toggle: False == 1 operator, True == not allowed (new Error)
                    if (operatorToggle === false) {     
                        throw new Error(`You may only use 2 digits`);
                    } else {
                        appendOpToEquation(inputElement);
                        show('display', equation.join(''));
                        operatorToggle = toggler(operatorToggle);
                        // equation.push(number2.join(''));
                    }
                    break;
                case '/':
                    //Number Toggle: False == number1, True == number2
                    if (numberToggle === false) {
                        throw new Error('Only 2 digits supported');
                    }else {
                        equation.push(number1.join(''));
                        show('display', number1);
                        numberToggle = toggler(numberToggle);
                    }                    
                        //Operator Toggle: False == 1 operator, True == not allowed (new Error)
                    if (operatorToggle === false) {
                        throw new Error(`You may only use 2 digits`);
                    }else {
                        appendOpToEquation(inputElement);
                        show('display', equation.join(''));
                        operatorToggle = toggler(operatorToggle);
                    }
                    break;
                
                default:
                    resetInput();
                    throw new Error(`This operator: ${inputElement.textContent} is not supported!`);
                    break;
            }
            break;
        case 'mod':
            if (numberToggle === false) {
                throw new Error('Only 2 digits supported');
            }else {
                equation.push(number1.join(''));
                show('display', number1.join(''));
                numberToggle = toggler(numberToggle);
            }                    

            if (operatorToggle === false) {
                throw new Error(`You may only use 2 digits`);
            }else {
                appendOpToEquation(inputElement);                    
                operatorToggle = toggler(operatorToggle);
            }
            break;
        default:
            throw new Error(`The class selected: ${inputElement.getAttribute('class')} is NOT valid OR has not been implemented yet!!`);
            break;
    }
}

function flipDigit() {
    if(numberToggle === true) {
        if (digitFlipToggle === false) {
            number1.unshift('-');
            digitFlipToggle = toggler(digitFlipToggle);
        } else {
            number1.shift();
            digitFlipToggle = toggler(digitFlipToggle);
        }
    }else if(numberToggle === false) {
        if (digitFlipToggle === false) {
            number2.unshift('-');
            digitFlipToggle = toggler(digitFlipToggle);
        } else {
            number2.shift();
            digitFlipToggle = toggler(digitFlipToggle);
        }
    }else{
        throw new Error(`Uncaught error: numberToggle received invalid entry`)
    }
}
/**
 * Calculate the solution!
 */
function calculate() {    
    return eval(equation.join(''));
}

function toggler(variableToToggle) {
    if (variableToToggle === true) {
       return false;
    }else if(variableToToggle === false){
        return true;
    }else{
        throw new Error(`Variable toggle has an uncaught value (toggler)`);
    }
}

/**
 * Append the clicked button to the screen
 */
function appendToNumber(number, numberElement) {
    // number.push(Number(numberElement.textContent));
    number.push(numberElement.textContent);
    // show('display',numberElement.textContent);
}

function appendOpToEquation(operatorElement) {
    console.log(`Operator: ${operatorElement.textContent}`);
    equation.push(operatorElement.textContent);
}

function resetInput() {
    display.textContent = 0;
    console.log(memory);
    memory = equation;
    // show('memory', memory);
    equation = [];
    number1 = [];
    number2 = [];
    numberToggle = toggler(numberToggle);
    operatorToggle = toggler(operatorToggle);
}

function show(outputToElement, output) {
    if (outputToElement==='memory') {
        document.getElementById('memory').textContent = output;
    }else if(outputToElement === 'display'){
        // console.log(`${equation.join('')}=${output}`);
        console.log(`OutPut: ${output}`)
        display.textContent = output;
    }else{
        throw new Error('The output element is invalid');
    }
}