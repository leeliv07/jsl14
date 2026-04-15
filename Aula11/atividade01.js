// Exercício: cálculo de aumento salarial

// Entrada: salário atual do funcionário
let salario = parseFloat(prompt("Digite o salário do funcionário:"));

// Processamento: cálculo do aumento de 20%
let aumento = salario * 0.20;
let novoSalario = salario + aumento;

// Saída: mostrar o novo salário
console.log("Salário original: R$ " + salario.toFixed(2));
console.log("Aumento de 20%: R$ " + aumento.toFixed(2));
console.log("Novo salário: R$ " + novoSalario.toFixed(2));
