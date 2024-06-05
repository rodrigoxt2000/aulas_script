// Blocos de variáveis locais e globais

let num1 = 100; //variável global
let num2 = 2;
    {
        let num2 = 30; // variável local
        console.log(num1);
        console.log(num2);
            {
                console.log(num2);
            }
    }
console.log(num1);
console.log(num2);