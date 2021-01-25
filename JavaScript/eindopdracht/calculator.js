// console.log(Array.from(document.getElementsByTagName('button')));
reset();

const btns = Array.from(document.getElementsByTagName('button'));
// document.getElementById('equals').addEventListener('click', function(){
//     const calculation = document.getElementById('display').textContent;
//     console.log(calculation);
//     console.log("OOPS!");
// });

// btns.addEventListener('click', function(obj){
//     document.getElementById('display').innerText = element.textContent;
//     console.log(element.textContent);
// });

btns.forEach(element => {
    element.addEventListener('click', function(){
        checkInput(element);

        switch (element.textContent) {
            case 'AC':
                reset();               
                break;
            case '=':
                //doe de berekening van je #display
                calc(document.getElementById('display'));
                break;
            case '+/-':
                //Flips the number from positive to negative or neg to pos
                show(flipDigit(element.textContent));
                break;
        
            default:
                show(element.textContent);
                break;
        }
    // show(element.textContent);
    // console.log(element.textContent);
    });
   
});
function flipDigit(...params) {
    return -(params);
}

function calc(calculation) {
    
    console.log(calculation.textContent);
}

function checkInput(inputVal) {
    // console.log(inputVal.querySelector('numbers'));
    console.log(inputVal);

    if (inputVal) {
        console.log(`NUMBER: ${inputVal.textContent}`);
    } else {
        console.log(`Input value: ${inputVal.textContent}`);
    }
    
}

function reset() {
    document.getElementById('display').textContent = 0;
}

function show(element) {    
    document.getElementById('display').innerText += element;
}