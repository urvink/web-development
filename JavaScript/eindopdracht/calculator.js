// console.log(Array.from(document.getElementsByTagName('button')));
// reset();

const btns = Array.from(document.getElementsByTagName('button'));

if (document.getElementById('display').innerText == false) {
    reset();
}

btns.forEach(element => {
    element.addEventListener('click', function () {
        // checkInput(element);
        // console.log("display: "+document.getElementById('display').innerText);

        switch (element.textContent) {
            case 'AC':
                reset();
                break;
            case 'C':
                reset();
                break;
            case '=':
                //doe de berekening van je #display
                calc(document.getElementById('display'));
                break;
            case '+/-':
                //Flips the number from positive to negative or neg to pos
                console.log("Flip:"+document.getElementById('display').textContent);
                show(flipDigit(document.getElementById('display').textContent));
                break;
            case '%':
                break
            default:
                // appendElement(element);
                show(element.textContent);
                break;
        }
    });
});

/**
 * flipDigit()
 * @param  {...any} params 
 */
function flipDigit(...params) {
    console.log(params);
    if (params[0] == '-') {
        return
    }
    return -(params);
}

/**
 * 
 * 
 */
function calc(displayElement) {
    //parse calculation
    console.log(displayElement.textContent);
    show(eval(displayElement.textContent));
}

function appendElement(element) {
    let number = [];
    console.log(element);
    switch (element.getAttribute('class')) {
        case 'number':
            number= number.push(Number(element.textContent));
            console.log(number);
            show(number);          
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
    document.getElementById('display').textContent = 0;
}

function show(element) {
    document.getElementById('display').innerText += element;
}