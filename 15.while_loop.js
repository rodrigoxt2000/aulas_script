//Estrutura de repetição - While

const ler  = require('readline-sync');

let num = ler.questionInt("Informe um numero: ");

while (num >= 0) {
    console.log(num);
    num--; // num = num -1

}