// Exercício: cálculo da área de um triângulo e de um círculo

// Área do triângulo: (base * altura) / 2
let base = parseFloat(prompt("Digite a base do triângulo:"));
let altura = parseFloat(prompt("Digite a altura do triângulo:"));

let areaTriangulo = (base * altura) / 2;
console.log("A área do triângulo é: " + areaTriangulo.toFixed(2));

// Área do círculo: π * raio²
let raio = parseFloat(prompt("Digite o raio do círculo:"));

let areaCirculo = Math.PI * (raio * raio);
console.log("A área do círculo é: " + areaCirculo.toFixed(2));
