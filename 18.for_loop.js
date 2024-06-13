// Estrutura de repetição FOR

const ler = require('readline-sync');

// Loop em ordem crescente
let x = ler.questionInt("Informe o numero: ");

for (let i = 0; i <= x; i++) {
    console.log(i);
}    
    console.log("________________________________________________________________________");

    // Loop em ordem decrescente

for (let i = x; i >= 0; i--) {
        console.log(i);
    }