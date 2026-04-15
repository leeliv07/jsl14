// Exercício: cálculo do IMC

// Entrada: leitura do peso e altura
let peso = parseFloat(prompt("Digite o peso em kg:"));
let altura = parseFloat(prompt("Digite a altura em metros:"));

// Processamento: cálculo do IMC
let imc = peso / (altura * altura);

// Saída: mostrar o IMC e a condição
console.log("Seu IMC é: " + imc.toFixed(2));

if (imc < 18.5) {
    console.log("Condição: Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Condição: Peso normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Condição: Acima do peso");
} else {
    console.log("Condição: Obeso");
}
