// console.log(Array.from(document.getElementsByTagName('button')));
// reset();

const btns = Array.from(document.getElementsByTagName('button'));
const display = document.getElementById('display');
let outputArr = [];

if (display.innerText == false) {
    reset();
}

btns.forEach(element => {
    element.addEventListener('click', function () {
        // checkInput(element);
        // console.log("display: "+document.getElementById('display').innerText);
        /**
         * Change AC to C: When there is an input clicked
         */

        /**
         * Checks which button is pressed
         */
        switch (element.textContent) {
            case 'AC':
                reset();
                break;
            case 'C':
                reset();
                break;
            case '=':
                //doe de berekening van je #display
                calc(display);
                break;
            case '+/-':
                //Flips the number from positive to negative or neg to pos
                console.log("Flip:"+display.textContent);
                // outputArr.unshift(flipDigit(display.textContent));
                outputArr.unshift('-');
                break;
            case '%':
                break
            default:
                // appendElement(element);
                outputArr.push(appendElement(element));
                document.getElementById('reset').textContent = 'C';
                break;
        }
        show(outputArr);
    });
});

/**
 * flipDigit()
 * @param  {...any} params 
 */
function flipDigit(...params) {
    console.log('FlipDigit()'+params);
    return params.unshift('-');
}

/**
 * 
 * 
 */
function calc(displayElement) {
    //parse calculation
    console.log(displayElement.textContent);
    console.log(eval(displayElement.textContent));
}

function appendElement(element) {
    let number = [];

    console.log(element);
    switch (element.getAttribute('class')) {
        case 'numbers':
            outputArr = number.push(Number(element.textContent));
            console.log(outputArr);
            // show(outputArr);          
            break;
        case 'operator':
            console.log("Operator used: " + element.textContent);
        default:
            break;
    }
}

function checkInput(inputVal) {
    // console.log(inputVal.getArtribute('numbers'));
    console.log(inputVal.getAttribute('class'));
}

function reset() {
    display.textContent = 0;
    document.getElementById('reset').textContent = 'AC';
}

function show(output) {
    if (typeof output == Array) {
        console.log(`output is een ARRAY`);
    }else{
        console.log(`output NOT an ARRAY`);
    }element
    display.innerText = output;
}