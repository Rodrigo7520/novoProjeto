import './sobreNos.css'; // Para o estilo da aplicação sobreNos.css
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importando o JavaScript do Bootstrap
//import HomePage from '../pages/Homepages';

// Componente Principal App
function sobreNos() {
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
      <h2>Ronroninha Cat Shop</h2>
      <p>Conhecendo Nosso Trabalho</p>
    </header>
  );
}

// Componente Nav {menu de navegação}
function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href=".sobreNos.js">Sobre nós</a></li>
        <li><a href="#Contato">Contato</a></li>
        <li><a href="./src/cadastroUsusario.js">Entrar</a></li>
      </ul>
    </nav>
  );
}

// Componente Main {conteúdo principal}
function Main() {
  return (
    <main>
      {/* Carrossel de imagens */}
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

      {/* Adicionando texto ao conteúdo principal */}
      <section className="about">
         <h3>Quem Somos</h3>
           <p>
               Sabemos que confiança é essencial neste tipo de trabalho. Por isso, a contratação de novas 
               babás segue um processo diferenciado: uma nova cat sitter só é escolhida quando já é 
               amiga confiável e de longa data de uma das babás da equipe.
           </p>
            <p>
               Todas as nossas tias têm experiência com gatos, convivem com eles diariamente e 
               passam por um treinamento rigoroso para garantir o mesmo nível de cuidado, carinho e
               profissionalismo a cada cliente felino e seus tutores. 
               Estamos atuando em Porto Alegre - RS com dedicação e amor desde 2014.
            </p>
       </section>

      {/* Objetivos, Visão, Missão e Valores */}
      <section className="values">
        <h3>Nossos Valores</h3>
        <ul>
          <li><strong>Objetivo:</strong> Oferecer serviços de excelência para tutores de gatos, proporcionando segurança e carinho aos felinos.</li>
          <li><strong>Visão:</strong> Ser a referência número um em cuidados para gatos no Brasil, reconhecida pela dedicação e profissionalismo.</li>
          <li><strong>Missão:</strong> Garantir o bem-estar de cada gato atendido, cuidando como se fosse nosso, com amor e responsabilidade.</li>
          <li><strong>Valores:</strong> Confiança, profissionalismo, empatia, respeito aos animais e compromisso com a excelência.</li>
        </ul>
      </section>
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

export default sobreNos;
