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
          <li><a href="/pages/Homepages.js">Home</a></li>
          <li><a href="/src/sobreNos.js">Sobre nos</a></li>
          <li><a href="/src/Contato.js">Contato</a></li>
          <li><a href="/src/cadastroUsusario.js">Entrar</a></li>
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
            <img className="d-block w-100" src="https://static.wixstatic.com/media/e17308_44001439ba344661b9487d7b4fc93d2f~mv2.png/v1/fill/w_980,h_370,al_c,q_90,enc_avif,quality_auto/e17308_44001439ba344661b9487d7b4fc93d2f~mv2.png" alt="Primeiro slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://static.wixstatic.com/media/e17308_ecac9b129462404a92de1b2ea143e515~mv2.png/v1/fill/w_980,h_370,al_c,q_90,enc_avif,quality_auto/e17308_ecac9b129462404a92de1b2ea143e515~mv2.png" alt="Segundo slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://static.wixstatic.com/media/e17308_e207574b08d34987a1d2c7aad856d42c~mv2.png/v1/fill/w_980,h_370,al_c,q_90,enc_avif,quality_auto/e17308_e207574b08d34987a1d2c7aad856d42c~mv2.png" alt="Terceiro slide" />
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
        <li><a href="/pages/Homepages.js">Home</a></li>
        <li><a href="/src/sobreNos.js">Sobre nos</a></li>
        <li><a href="/src/Contato.js">Contato</a></li>
        <li><a href="/src/cadastroUsusario.js">Entrar</a></li>
      </ul>

      {/* Direitos autorais */}
      <div>
        <p>@ 2025 por Ronroninha Cat Shop CNPJ 37.848.640/0001-66</p>
      </div>
    </div>
  );
}

export default sobreNos;
