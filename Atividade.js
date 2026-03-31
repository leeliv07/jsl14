// Pedindo os dados do usuário
let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");
let cidade = prompt("Digite sua cidade:");
let email = prompt("Digite seu email:");
let profissao = prompt("Digite sua profissão:");

// Exibindo no formato solicitado
console.log(`
/* nome : ${nome}
idade : ${idade}
cidade : ${cidade}
email : ${email}
profissao : ${profissao}

Oi eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, meu contato é ${email} e minha profissão é ${profissao}.
*/
`);