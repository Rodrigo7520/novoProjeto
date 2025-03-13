//Crio uma variável para fazer a requisição do http
var http=require("http");
   //Obrigatóriamente, a variável criada, será usada para criar o servidor 
   //enviando, por parâmetro requisição e resposta do servidor.  
    http.createServer(function(request, response){

        //Aguardo a resposta do servidor, que será uma texto, e por isso o 'context-type':'text/plain' para receber um texto como resposta
        response.writeHead(200,{'context-type':'text/plain'});
        //A resporta final, por se tratar de um texto será a que está entre aspas
        response.end("Servidor rodando com sucesso!");
        //Obrigatóriamente essas informações devem ser ouvidas pelo servidor na porta 800, visto que a 3000 já está sendo utilizada pelo react.
    
}).listen(8080);

const express=require('express');
const mysql=require('mysql');
const { use } = require("react");
const { log } = require("console");

const app=express();
const port=8080;

//Middlewaew para analisar o corpo das requisções
app.use(express.json());

//Configuração da conexão com o Mysql
const db=mysql.createConnection({
    host:'localhost',
    user:'root', // ou seu usuário do Mysql
    password:"",// ou senha do Mysql
    database:'AppMoveis',//nome do banco de dados
});

//Conexão com o banco de Dados
db.connect((err)=>{
    if (err){
        console.error('Erro ao conectar ao banco de dados'+ err.stack);
        return;
    }
    console.log('Conectado ao banco de dados MySQL!');    
});

//Rota para obter todos os usuários 
app.get('/usuarios',(req,res)=>{
    db.query('SELECT * FROM usuarios', (err,results)=>{
        if(err){
            res.status(500).send('Erro ao consultar banco de dados')
        }else{
            res.json(results)
        }
    });
});

//Rota para adicionar um usuário 
app.post('/usuarios',(req,res)=>{
    const{nome,email}=req.body;
    const query='INSERT INTO usuario (nome,email) VALUES(?,?)';

    db.query(query,[nome,email],(err,results)=>{
        if(err){
            res.status(500).send('Erro ao inserir no banco de dados');
        }else{
            res.status(201).json({id:results.insertld,nome,email});
        }
    });
});

//Iniciar o servidor
app.listen(port,()=>{
    console.log('Servidor rodando em http://localhost:${port}');
});

// Criar um servidor HTTP básico
http.createServer((request, response) => {
    response.writeHead(200, { "content-type": "text/plain" });
    response.end("Servidor rodando com sucesso!");
}).listen(8000);