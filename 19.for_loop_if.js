// Estrutura de repetição - FOR - Condicional IF ELSE

const ler = require('readline-sync');

const C = 5; // Critério de contagem
let x = ler.questionInt("Digite um numero: ");
let cont = C;

for (let i = 0; i <= x; i++) {

    console.log(i);

    if (i >= cont) {
        let sair = ler.question("'Enter' continuar contando ou 'Sair' para finalizar ");
        sair = sair.toLowerCase()
        if (sair == "sair" || i == x) {
            console.log("Contagem finalizada!");
            break;
        }
        cont += C;
    }


}