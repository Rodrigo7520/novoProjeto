const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Criação do servidor Express
const server = express();
const port = 8000;

// Middleware para analisar o corpo das requisições (JSON)
server.use(express.json());

// Ativar CORS para permitir chamadas de outras origens (por exemplo, React na porta 3000)
server.use(cors());

// Configuração da conexão com o MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Substitua pelo seu usuário do MySQL
    password: '', // Substitua pela sua senha do MySQL
    database: 'ronroninha', // Nome do seu banco de dados
});

// Conexão com o banco de dados MySQL
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ' + err.stack);
        return;
    }
    console.log('Conectado ao banco de dados MySQL!');
});

// Rota para obter todos os usuários
server.get('/usuarios', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            res.status(500).send('Erro ao consultar banco de dados');
        } else {
            res.json(results);
        }
    });
});

// Rota para adicionar um usuário
server.post('/usuarios', (req, res) => {
    const { nome, email } = req.body;
    const query = 'INSERT INTO usuarios (nome, email) VALUES (?, ?)';

    db.query(query, [nome, email], (err, results) => {
        if (err) {
            res.status(500).send('Erro ao inserir no banco de dados');
        } else {
            res.status(201).json({ id: results.insertId, nome, email });
        }
    });
});

// Rota para editar um usuário
server.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    const query = 'UPDATE usuarios SET nome = ?, email = ? WHERE id = ?';

    db.query(query, [nome, email, id], (err, results) => {
        if (err) {
            res.status(500).send('Erro ao atualizar no banco de dados');
        } else if (results.affectedRows === 0) {
            res.status(404).send('Usuário não encontrado');
        } else {
            res.status(200).send('Usuário atualizado com sucesso');
        }
    });
});

// Rota para excluir um usuário
server.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM usuarios WHERE id = ?';

    db.query(query, [id], (err, results) => {
        if (err) {
            res.status(500).send('Erro ao excluir no banco de dados');
        } else if (results.affectedRows === 0) {
            res.status(404).send('Usuário não encontrado');
        } else {
            res.status(200).send('Usuário deletado com sucesso');
        }
    });
});

// Endpoints adicionais de exemplo

// Endpoint para verificar se o servidor está funcionando
server.post('/server', (req, res) => {
    res.json({ message: 'Node rodando na porta 8000!' });
});

// Endpoint sobre a página "Sobre"
server.post('/server/sobreNos', (req, res) => {
    res.json({ message: 'Informações sobre nossa empresa.' });
});

// Endpoint sobre a página "Política da Loja"
server.post('/server/politicaLoja', (req, res) => {
    res.json({ message: 'Informações sobre nossa Política da Loja.' });
});

// Endpoint sobre a página "Contatos"
server.post('/server/contatos', (req, res) => {
    res.json({ message: 'Dúvidas? Entre em contato conosco.' });
});

// Endpoint sobre a página "Cadastrar Usuário"
server.post('/server/cadastroUsuario', (req, res) => {
    res.json({ message: 'Duvidas? Entre em contato conosco.' });
});

// Iniciando o servidor na porta 8000
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
