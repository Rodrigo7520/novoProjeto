import './App.css'; // Para o estilo da aplicação
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importando o JavaScript do Bootstrap
import Entrar from './entrar.js';

// Componente Principal App
function App() {
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
      <h2>Minha Aplicação React</h2>
      <p>Bem-vindo à minha página</p>
    </header>
  );
}

// Componente Nav {menu de navegação}
function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#Sobre">Sobre</a></li>
        <li><a href="#Contato">Contato</a></li>
        <li><a href=".entrar.js">Entrar</a></li>
      </ul>
    </nav>
  );
}

// Componente Main {conteúdo principal}
function Main() {
  return (
    <main>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src=".public/imagem1/fachaLoja.png" alt="Primeiro slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src=".public/imagem1/img2.png" alt="Segundo slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src=".public/imagem1/img3.png" alt="Terceiro slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </main>
  );
}

// Componente Footer
function Footer() {
  return (
    <div>
      {/* Links da barra de navegação */}
      <ul>
        <li><a href="#Home">Loja</a></li>
        <li><a href="#Sobre">Sobre</a></li>
        <li><a href="#Politica">Política da Loja</a></li>
        <li><a href="#Contato">Contato</a></li>
      </ul>

      {/* Direitos autorais */}
      <div>
        <p>@ 2025 por Ronroninha Cat Shop CNPJ 37.848.640/0001-66</p>
      </div>
    </div>
  );
}

export default App;
