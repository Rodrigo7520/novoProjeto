const express = require('express');
const app = express();
const port = 8000;

//Middleware para permitir requisição de outros dominios (CORS)
const cors = require('cors');
const { Server } = require('http');
app.use(cors());

//Endpoints da API
app.get('/api',(req,res)=>{
    res.json({message: 'Node rodadndo na porta 8000!'});
});

//Iniciando o servidor ][
app.listen(port,()=>{
    console.log('Servidor rodando em http://localhost:$(port)');
});

//Rota para obter dados sobre a página "Sobre"
Server.js.get('/api/sobre',(req,res)=>{
    res.json({message:'Informações sobre nossa empresa.'});
});
