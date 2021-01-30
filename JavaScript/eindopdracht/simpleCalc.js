let display = document.getElementById('display');
let memory = document.getElementById('memory');
let som = '';
let solution = '';
let getal1 = '';
let getal2 = '';
let op = '';

let getalToggle = false;
let periodToggle = true;

function checkInput(inputElement) {
    document.getElementById('reset').textContent = 'C';
    switch (inputElement.textContent) {
        case '=':
            logger(`Getal1: ${getal1}`);
            logger(`Operator: ${op}`);
            logger(`Getal2: ${getal2}`);
            som+=getal2;
            showInDisplay(getal2);
            memory.textContent = som;
            logger(`Memory: ${document.getElementById('memory').textContent}`);            
            solution = calc(som).toFixed(2);
            logger(`Solution: ${solution}`);
            showInDisplay(solution);
            break;
        case 'AC':
            reset();
            break;
        case 'C':
            reset();
            break;
        case '+/-':
            if (getalToggle === false) {
                flip('getal1');
                logger(`getal1 +/- ${getal1}`);
                getal1 = getal1;
                showInDisplay(getal1);
                logger(getal1);
            } else {
                flip('getal2');
                logger(`getal2 +/- ${getal2}`);
               
                getal2 = getal2;
                showInDisplay(getal2);
                logger(getal2);
            }
            break;
        case '+':
            op = '+';
            if (getalToggle === false) {
                getalToggle=toggler(getalToggle);
                periodToggle=toggler(periodToggle);
                som += getal1;
                som += op;
                showInDisplay(som);
                
            }else{                
                som += getal2;
                showInDisplay(som);
            }            
            break;
        case '-':
            op = '-';
            if (getalToggle === false) {
                getalToggle=toggler(getalToggle);
                periodToggle=toggler(periodToggle);
                som += getal1;
                som += op;
                showInDisplay(som);
            }else{                
                som += getal2;
                showInDisplay(getal2);
            }            
            break;
        case 'x':
            op = '*';
            if (getalToggle === false) {
                som += getal1;
                som += op;                
                getalToggle=toggler(getalToggle);
                periodToggle=toggler(periodToggle);
                showInDisplay(som);
            }else{
                som += getal2;
                showInDisplay(som);
            }
            break;
        case '/':
            op = '/';
            if (getalToggle === false) {
                getalToggle=toggler(getalToggle);
                periodToggle=toggler(periodToggle);
                som += getal1;
                som += op;
            }else{
                som+=getal2;
                showInDisplay(som);
            }
            break;
        case '.':
            if (getalToggle === false && periodToggle === true) {
                getal1+='.';
                logger(getal1);
                showInDisplay(getal1);
                periodToggle=toggler(periodToggle);
            } else if(getalToggle === true && periodToggle === true){
                getal2+='.';
                showInDisplay(getal2);
                periodToggle=toggler(periodToggle);
            }else if(periodToggle === false){
                logger(`Only 1 PERIOD (.) allowed!!`);
                // periodToggle=toggler(periodToggle);
            }
            break;
        case '%':
            op = '%';
            if (getalToggle === false) {
                getalToggle=toggler(getalToggle);
                periodToggle=toggler(periodToggle);
                som += getal1;
                som += op;
            }else{
                som+=getal2;
                showInDisplay(som);
            }
            break;
        default:
            if (getalToggle === false) {
                // logger(`Getal1\n------------`);
                getal1+=inputElement.textContent;
                logger(` Default getal1: ${getal1}`);
                showInDisplay(getal1);
            } else {
                // logger(`Getal2\n------------`);
                getal2+=inputElement.textContent;
                logger(` Default getal2: ${getal2}`);
                showInDisplay(getal2);
            }
            break;
    }
}

function showInDisplay(output) {
    display.textContent = output;
}

function toggler(toggle) {
    if (toggle) {
        return false;
    } else if(toggle === false){
        return true;
    }else{
        throw new Error(`Invalid entry of toggle (true or false allowed)`)
    }
}

function logger(data) {
    console.log(data);
}

function calc(equation) {
    return eval(equation);
}

function resetDisplay() {
    getal1 = '';
    getal2 = '';
    document.getElementById('reset').textContent = 'AC';
    showInDisplay();
    if (memory === false) {
        memory.textContent+=`=${solution}`;
    }else{
        memory.textContent = som;
    }
    
    som = '';
    solution = '';
    op = '';

    if (getalToggle === true && periodToggle === false) {
        getalToggle = toggler(getalToggle);
        periodToggle = toggler(periodToggle);
    }else if (periodToggle === false) {
        periodToggle = toggler(periodToggle);
    }
}

function flip(t) {
    if (t === 'getal1') {
        getal1*=-1;
    }else if(t === 'getal2'){
        getal2*=-1;
    }
}