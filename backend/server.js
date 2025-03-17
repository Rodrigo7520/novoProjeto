const express = require('express');
const server = express();
const port = 8000;

// Middleware para permitir requisição de outros domínios (CORS)
const cors = require('cors');
const { Server } = require('http');
server.use(cors());

// Endpoints da API
server.get('/server', (req, res) => {
    res.json({ message: 'Node rodando na porta 8000!' });
});

// Rota para obter dados sobre a página "Sobre"
server.get('/server/sobreNos', (req, res) => {
    res.json({ message: 'Informações sobre nossa empresa.' });
});

// Rota para obter dados sobre a página "Política da Loja"
server.get('/server/politicaLoja', (req, res) => {
    res.json({ message: 'Informações sobre nossa Política da Loja.' });
});

// Rota sobre a página "Contatos"
server.get('/server/contatos', (req, res) => {
    res.json({ message: 'Dúvidas? Entre em contato conosco.' });
});

// Rota sobre a página "Cadastrar Usuário"
server.get('/server/cadastroUsuario', (req, res) => {
    res.json({ message: 'Duvidas? Entre em contato conosco.' });
});

// Iniciando o servidor
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
