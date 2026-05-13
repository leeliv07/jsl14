fetch('https://viacep.com.br/ws/01001000/json/')
    .then(respostaAPI => respostaAPI.json())
    .then(dados => {
        // Manipula o JSON retornado
        console.log('Logradouro:', dados.logradouro);
        console.log('Localidade:', dados.localidade);
        console.log('UF:', dados.uf);
    })
    .catch(erro => {
        // Trata o erro
        console.error('Erro na requisição:', erro);
    });

   