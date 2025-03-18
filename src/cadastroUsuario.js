import './cadastroUsuario.css'; // Para o estilo da aplicação
import React, { useState } from "react";
import './sobreNos';
import './contatos';
import './politicaLoja';
import './Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importando o JavaScript do Bootstrap

// Componente Principal App
function CadastroUsuario() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <img 
        src="https://static.wixstatic.com/media/e17308_c34ca378d92440e283f79f66e720e9fe~mv2.png/v1/fill/w_156,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Site-Ronroninha-logo_edited.png" 
        alt="Logo Ronroninha Cat Sitter" 
        style={{ width: '100px', height: 'auto' }} 
      />
      <h2>Ronroninha Cat Sitter</h2>
      <p>SERVIÇO OFERECIDO HÁ 10 ANOS EM PORTO ALEGRE</p>
    </header>
  );
}

// Componente Nav {menu de navegação}
function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/home.js">Home</Link></li> {/* Usando o Link do react-router-dom */}
        <li><Link to="/sobreNos.js">Sobre nós</Link></li>
        <li><Link to="/contatos.js">Contato</Link></li>
        <li><Link to="/cadastroUsuario.js">Entrar</Link></li>
      </ul>
    </nav>
  );
}

// Componente Main {conteúdo principal}
function Main() {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    telefone: "",
    nomeGato: "",
    senha: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuário cadastrado: ", formData);
    alert("Usuário cadastrado com sucesso!");
    setFormData({
      nomeCompleto: "",
      email: "",
      telefone: "",
      nomeGato: "",
      senha: ""
    });
  };

  return (
    <main>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome Completo:</label>
          <input
            type="text"
            name="nomeCompleto"
            value={formData.nomeCompleto}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Telefone:</label>
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Nome do Gato:</label>
          <input
            type="text"
            name="nomeGato"
            value={formData.nomeGato}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
}

// Componente Footer
function Footer() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/home.js">Home</Link></li>
          <li><Link to="/sobreNos.js">Sobre nós</Link></li>
          <li><Link to="/politicaLoja.js">Politica da Loja</Link></li>
          <li><Link to="/contatos.js">Contatos</Link></li>
        </ul>
      </nav>

      <div>
        <p>@ 2025 por Ronroninha Cat Shop CNPJ 37.848.640/0001-66</p>
      </div>
    </div>
  );
}

export default CadastroUsuario;
