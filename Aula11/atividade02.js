// Exercício: cálculo da média de três notas

// Entrada: leitura das três notas
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

// Processamento: cálculo da média
let media = (nota1 + nota2 + nota3) / 3;

// Saída: mostrar a média
console.log("Notas: " + nota1 + ", " + nota2 + ", " + nota3);
console.log("Média final: " + media.toFixed(2));
