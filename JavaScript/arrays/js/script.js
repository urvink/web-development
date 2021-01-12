// 1. Aan maken van een array. met [] geef je aan dat je eenlege lijst wilt maken.​
let randomNumbers = [];

// 2. Toevoegen van producten in de array​
randomNumbers = [1,4,5,8,9];

// 3. Een waarde benaderen in de array.​
console.log(randomNumbers);

// let rand_id_gen = Math.floor(Math.random());
let rand_Array = [];
let teller = 0;
if (teller<=10) {
    rand_Array.fill(Math.floor(Math.random()));
    teller++;
} else {
    console.log(rand_Array)
}