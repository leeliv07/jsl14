let palavra = 'sou um texto, logo sou um tipo string' // Variável do tipo string, texto entre aspas simples ou duplas
let numero = 42 // Variável do tipo number, sem aspas, pode ser inteiro ou decimal
let numero2 = 3.14 // Variável do tipo number, decimal
let numero3 = "2026" // Variável do tipo string, mesmo que seja um número, está entre aspas, então é uma string

//o JS vai permitir a subtração. multiplicação e divisão entre strings (número no formato string) e number, mas náo terá suporte para soma entre string e number, pois a soma é interpretada como concatenação de texto, ou seja, o número é tratado como texto e não como valor numérico.

console.log(numero3 + numero) // Isso resultará em "202642", pois é uma concatenação de string
console.log(numero3 - numero) // Isso resultará em 1984, pois o JS converte a string "2026" para o número 2026 e realiza a subtração
console.log(numero3 * numero) // Isso resultará em 85092, pois o JS converte a string "2026" para o número 2026 e realiza a multiplicação
console.log(numero3 / numero) // Isso resultará em 47.285714285714285, pois o JS converte a string "2026" para o número 2026 e realiza a divisão

let num = Number ("10") // Converte a string "10" para o número 10
let num2 = Number ("3.14") // Converte a string "3.14" para o número 3.14
let num3 = parseFloat("3.14") // Converte a string "3.14" para o número 3.14, parseFloat é usado para números decimais
let num4 = parseInt("10.5") // Converte a string "10.5" para o número 10, parseInt é usado para números inteiros

let numeroUsuario2 = prompt("Digite um número:") // O valor digitado pelo usuário será uma string
let numeroConvertido = Number(numeroUsuario2) // Converte a string digitada pelo usuário para um número