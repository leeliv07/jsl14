// Exercício: verificar se A + B é maior que C

// Entrada: leitura dos três valores
let A = parseFloat(prompt("Digite o valor de A:"));
let B = parseFloat(prompt("Digite o valor de B:"));
let C = parseFloat(prompt("Digite o valor de C:"));

// Processamento: verificar se A + B > C
if ((A + B) > C) {
    console.log("A soma de A + B é maior que C.");
} else if ((A + B) === C) {
    console.log("A soma de A + B é igual a C.");
} else {
    console.log("A soma de A + B não é maior que C.");
}
