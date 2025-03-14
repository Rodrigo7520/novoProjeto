const express = require('express');
const server = express();
const port = 8000;

//Middleware para permitir requisição de outros dominios (CORS)
const cors = require('cors');
const { Server } = require('http');
server.use(cors());

//Endpoints da API
server.get('/api',(req,res)=>{
    res.json({message: 'Node rodadndo na porta 8000!'});
});

//Iniciando o servidor ][
server.listen(port,()=>{
    console.log('Servidor rodando em http://localhost:$(port)');
});

//Rota para obter dados sobre a página "Sobre"
server.get('/api/sobre',(req,res)=>{
    res.json({message:'Informações sobre nossa empresa.'});
});
