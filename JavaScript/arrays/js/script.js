// 1. Aan maken van een array. met [] geef je aan dat je eenlege lijst wilt maken.​
let randomNumbers = [];

// 2. Toevoegen van producten in de array​
randomNumbers = [1,4,5,8,9];

// 3. Een waarde benaderen in de array.​
// console.log(randomNumbers);

// Opdracht 1
/**
 * Maak een array met 10 getallen die willekeurig in een array staan. Print de array uit in jouw console.
 * 
 * let array = [1,2,3,4,5,6,7,8,9,10];
    array.sort(()=>Math.random() -0.5);
    console.log(`Opdracht 1: ${array}`);
 * 
 */
const num_arr = [2, 4, 6, 1, 8, 3, 10, 5, 9, 7];
console.log(`Opdracht 1 (Random Numbers Array) ${num_arr}`);


// Opdracht 2
/**
 * Maak een array met 5 verschillende fruitsoorten. Print de array uit in jouw console.
 */
const ass_fruits_arr = ['Oranges', 'Watermelon', 'Kiwi', 'Dragon Fruit', 'Coconut'];
console.log(`Opdracht 2 (Assorted Fruits Array): ${ass_fruits_arr}`);

/**
 * Opdracht 3
 * -----------
 * Op welke index staat “Appel”/ "Coconut". Gebruik de index waarde om “Appel”/ "Coconut" in jouw console uit teprinten.
 */

console.log(`Opdracht 3: ${ass_fruits_arr[4]} staat op index: ${ass_fruits_arr.indexOf('Coconut')}`);

/**
 * Opdracht 4
 * ------------
 * Op welke index staat “Aardbei”/ "Watermelon". Gebruik de index waarde om “Aardbei”/ "Watermelon" in jouw console uit teprinten.
 * 
 */
console.log(`Opdracht 4: ${ass_fruits_arr[1]} staat op index: ${ass_fruits_arr.indexOf('Watermelon')}`);

/**
 * Opdracht 5
 * ------------
 * We gaan het iets complexer maken met het bepalen van de fruit. 
 * Er zijn nu 2 arrays gedefinieerd, namelijk een array met getallen en een array met fruitsoorten. 
 * De eerste array bepaalt welke fruitsoort er geprint moet worden. 
 * Gebruik de Math.random() methode om te bepalen welke waarde uit de eerste array wordt gehaald. 
 * Vervolgens kun je de waarde gebruiken als index en de fruitsoort printen in jouw console. 
 * Helaas, de getallen 5 t/m 10 uit de eerste array zullen een undefined teruggeven als je dat als index bij de fruit array zal gebruiken. 
 * Hiervoor kun je de modulo (%) gebruiken. Zoek uit hoe modulo werkt en pas dat toe aan de waarde van de eerste array. 
 * Als resultaat zal er altijd een fruitsoort uitgeprint worden.
 */

let randomNumber = Math.round(Math.random()*9);

// console.log(`\nRandom fruit: ${typeof ass_fruits_arr[randomNumber]}`);
rand_fruit = ass_fruits_arr[num_arr[randomNumber]];
console.log(`Before CHECK: ${rand_fruit}`);

if ( rand_fruit == undefined) {
    console.log("\nIK BEN NIET TE DEFINIEREN");
    // ((a % n ) + n ) % n
} else {
    console.log(`${rand_fruit}`);
}


/**
 * Opdracht 6
 * ------------
 * Je hebt nu geleerd hoe je arrays kunt aanmaken en de waarde kunt benaderen. 
 * Arrays hebben ook functies die je kunt gebruiken. 
 * Zoek uit wat push(), pop(), shift(), slice(), splice(), sort(). 
 * Maak gebruik van de fruits array en maak voor elke functie een voorbeeld en geef in commentaar wat het doet.
 */

/**
 * Opdracht 7
 * --------------
 * Naast de functies die je van de array kunt gebruiken heb je ook nog de “length” property dieje kunt gebruiken. 
 * Hiermee kan je de grootte van de array opvragen. 
 * Gebruik de lengthproperty en print in de console uit hoe groot de fruits array is.
 */

/**
 * Opdracht 8
 * ------------
 * De bestaande values van de array kan je ook aanpassen. 
 * Zoek uit hoe je op een specifiekeindex de waarde kan aanpassen. 
 * Pas de value “Peer” naar “Sinaasappel”.
 */

/**
 * Opdracht 9
 * -----------
 * Kijkend naar de fruits array. Hoe draai je de values “Aardbei” en “Mandarijn” om in de array door gebruik te maken van indices (index).
 */
