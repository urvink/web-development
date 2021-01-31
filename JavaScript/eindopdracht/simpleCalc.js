/**Globals section */
let display = document.getElementById('display'); //Display-element wordt getarget
let memory = document.getElementById('memory'); //Memory-element wordt getarget
let som = ''; //Som (berekening)
let solution = ''; //Uitkomst
let getal1 = ''; //Getal 1
let getal2 = ''; //Getal 2
let op = ''; //Operator

let getalToggle = false; //getalToggle {boolean} bepaald wanneer getal1 (false) wordt aangeroepen en wanneer getal2 (true)
let periodToggle = false; //periodToggle {boolean} bepaald dat er een period (.) is gebruikt!
let opToggle = false; //opToggle {boolean} bepaald wanneer er een operator is gebruikt

/** 
 * checkInput FUNCTION
 * -------------------
 * Each time a button is clicked, THIS function is called. 
 * 
 */
function checkInput(inputElement) {
    document.getElementById('reset').textContent = 'C';
    switch (inputElement.textContent) {
        case '=':
            logger(`Getal1: ${getal1}`);
            logger(`Operator: ${op}`);

            //Check to see if getal2 is filled in
            if (getal2) {
                logger(`Getal2: ${getal2}`);
                som+=getal2;
            } else {
                logger(`SPECIAL CASE`);
                som+=getal1;
            }
            
            showInDisplay(getal2);
            memory.textContent = som;
            logger(`Memory: ${document.getElementById('memory').textContent}`);
            /**
             * Check to see if getal1 || getal2 || solution has decimals
             */
            /*if ((getal1 || getal2 || solution) === decimal ) {
                
            }*/
            solution = calc(som).toFixed(2);
            logger(`Solution: ${typeof solution}`);
            showInDisplay(solution);
            break;

            /**
             * AC/ C Button
             * -------------
             * When button is pressed change value of the button from AC to C
             */
        case 'AC':
            reset();
            break;
        case 'C':
            reset();
            break;

            /**
             * +/- Button
             * ------------
             * entered value should be flipped from neg to pos || pos to neg 
             * Tip:  new getal = getal*-1
             */
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
            /**
             * Operator Buttons section
             * ------------------------
             * - getal1 gets added to the som
             * - getalToggle is flipped
             * - operator (op) gets added to the som
             * - new som get displayed on screen (display)
             */
        case '+':
            op = '+';
            if (getalToggle === false && opToggle === false) {
                getalToggle=toggler(getalToggle);
                periodToggle=toggler(periodToggle);
                som += getal1;
                som += op;
                opToggle = toggler(opToggle);
                showInDisplay(som);
                inputElement.classList.toggle('clicked');
            }else if(getalToggle === true && opToggle === true){                
                som += getal2;
                showInDisplay(som);
            }            
            break;
        case '-':
            op = '-';
            if (getalToggle === false && opToggle === false) {
                getalToggle=toggler(getalToggle);
                periodToggle=toggler(periodToggle);
                som += getal1;
                som += op;
                opToggle = toggler(opToggle);
                showInDisplay(som);
                inputElement.classList.toggle('clicked');
            }else if(getalToggle === true && opToggle === true){                
                som += getal2;
                showInDisplay(getal2);
            }            
            break;
        case 'x':
            op = '*';
            if (getalToggle === false && opToggle === false) {
                som += getal1;
                som += op;                
                getalToggle=toggler(getalToggle);
                periodToggle=toggler(periodToggle);
                opToggle = toggler(opToggle);
                showInDisplay(som);
                inputElement.classList.toggle('clicked');
            }else if(getalToggle === true && opToggle === true){
                som += getal2;
                showInDisplay(som);
            }
            break;
        case '/':
            op = '/';
            if (getalToggle === false && opToggle === false) {
                getalToggle=toggler(getalToggle);
                periodToggle=toggler(periodToggle);
                som += getal1;
                som += op;
                opToggle = toggler(opToggle);
                inputElement.classList.toggle('clicked');
            }else if(getalToggle === true && opToggle === true){
                som+=getal2;
                showInDisplay(som);
            }
            break;
            /**
             * Period Button
             * --------------
             * When the period button has been clicked the periodToggle is flipped 
             * and for that "getal" it's not allowed anymore
             */
        case '.':
            if (getalToggle === false && periodToggle === false) {
                getal1+='.';
                logger(getal1);
                showInDisplay(getal1);
                periodToggle=toggler(periodToggle);
            } else if(getalToggle === true && periodToggle === false){
                getal2+='.';
                showInDisplay(getal2);
                periodToggle=toggler(periodToggle);
            }else if(periodToggle === true){
                logger(`Only 1 PERIOD (.) allowed!!`);
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

    if (getalToggle === true && opToggle === true) {
        getalToggle = toggler(getalToggle);
        // periodToggle = toggler(periodToggle);
        opToggle = toggler(opToggle);
    }else if (periodToggle === true) {
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