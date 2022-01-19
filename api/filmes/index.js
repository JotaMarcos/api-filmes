const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/api/filmes', (requisicao, resposta) => {
    const filmes = [
        {nome: 'Os Vingadoes 3'},
        {nome: 'Destacamento Blood'},
        {nome: 'Pantera Negra'}
    ];

    resposta.send(JSON.stringify(filmes));
});

app.listen(3001, () => console.log('A API já está funcionando e aceitando rquisições!'));


