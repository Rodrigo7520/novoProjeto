// src/HomePage.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importando o JavaScript do Bootstrap
import HomePage from "homePage.css";
//import sobreNos from "../src/sobreNos";

function HomePage() {
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
          <h2>Ronroninha Cat Sitter</h2>
          <p>Bem-vindo à minha página Cat Sitter</p>
        </header>
      );
    }
    
    // Componente Nav {menu de navegação}
    function Nav() {
      return (
        <nav>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="./sobreNos.js">Sobre nos</a></li>
            <li><a href="./contato.js">Contato</a></li>
            <li><a href="./App.js">Sair</a></li>
          </ul>
        </nav>
      );
    }
    
    function Main() {
        return (
          <main>
            {/* Carrossel */}
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
      
            {/* Cards */}
            <section className="cards-section">
              <div className="card">
                <h3>COMO FUNCIONA O SERVIÇO?</h3>
                <p>Entenda os passos para contratar nossos serviços.</p>
              </div>
              <div className="card">
                <h3>SERVIÇOS VOLTADOS À SAÚDE</h3>
                <p>Descubra os cuidados que oferecemos para o bem-estar do seu pet.</p>
              </div>
              <div className="card">
                <h3>POR QUE UMA EQUIPE?</h3>
                <p>Conheça os benefícios de contar com uma equipe qualificada.</p>
              </div>
              <div className="card">
                <h3>ORÇAMENTO</h3>
                <p>O valor é por visita (1h de duração) e variável de acordo com a região, 
                    número de gatinhos e com adicional caso precise contratar também algum serviço de cat care. 
                    Para saber o valor no seu endereço preencha abaixo o formulário de pedido
                    de orçamento com todas as informações solicitadas ❤️</p>
                <button className="btn-orcamento">Faça seu orçamento</button>
               </div>
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
            <li><a href="./sobreNos.js">Sobre</a></li>
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

export default HomePage;
