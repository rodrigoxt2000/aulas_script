// Entrada usuario condicional Escolha (Switch Case)

const ler = require('readline-sync');

console.log("------------------------- MENU INICIAL ---------------------------");
console.log("**** Informe o valor da empréstimo: ****");
let valor = ler.questionFloat("=> ");

console.clear(); // Limpar a tela

console.log("-------------------- MENU OPÇÕES DE PAGAMENTO ----------------------");
console.log(" 1. PIX \n 2. DÉBITO \n 3. CRÉDITO \n 4. DINHEIRO");
console.log("-------------------------------------------------------------------");
let opt = ler.questionInt("=> ");
let result = 0;

switch (opt) {
    case 1:
        result = valor += valor * 0.15;
        console.log("Pix: acréscimo de 15%");
        console.log(`Realizando o pagamento via PIX o valor ficará em ${result}`);
        break;
    case 2:
        result = valor += valor * 0.2;
        console.log("Débito: acréscimo de 20%");
        console.log(`Realizando o pagamento via DÉBITO o valor ficará em ${result}`);
        break;
    case 3:
           result = valor += valor * 0.4;
           console.log("Crédito: acréscimo de 40%");
           console.log(`Realizando o pagamento via CRÉDITO o valor ficará em ${result}`);
           break;
    case 4:
           result = valor += valor * 0.1;
           console.log("Crédito: acréscimo de 10%");
           console.log(`Realizando o pagamento via DINHEIRO o valor ficará em ${result}`);
           break;
    default:
        console.log("Opção Inválida");
        break;
}