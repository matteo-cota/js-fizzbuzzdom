console.log('js ok')

// Step da seguire:
// 1. Otteniamo il riferimento all'elemento contenitore dal DOM
// 2.Ciclo per iterare attraverso i numeri da 1 a 100
// 3.Controlliamo se il numero è multiplo di 3 e 5
// 4.Aggiungiamo il nuovo box al contenitore nel DOM

// Otteniamo il riferimento all'elemento contenitore dal DOM
const container = document.getElementById('fizzbuzz-container');

// Ciclo per iterare attraverso i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // Creiamo un nuovo elemento div per ogni numero
    const box = document.createElement('div');
    box.classList.add('box');


    // Controlliamo se il numero è multiplo di 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {
        box.textContent = 'FizzBuzz';
        box.classList.add('fizzbuzz');
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        box.textContent = 'Fizz';
        box.classList.add('fizz');
        console.log("fizz")
    } else if (i % 5 === 0) {
        box.textContent = 'Buzz';
        box.classList.add('buzz');
        console.log("buzz")
    } else {
        box.textContent = i;
        console.log("i")
    }

    // Aggiungiamo il nuovo box al contenitore nel DOM
    container.appendChild(box);



}