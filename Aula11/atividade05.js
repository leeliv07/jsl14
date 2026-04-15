// Exercício: ler dois números e mostrar o maior

// Entrada: leitura dos dois números
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

// Processamento e saída
if (numero1 > numero2) {
    console.log("O maior número é: " + numero1);

} else if (numero2 > numero1) {
    console.log("O maior número é: " + numero2);
    
} else {
    console.log("Os dois números são iguais: " + numero1);
}
