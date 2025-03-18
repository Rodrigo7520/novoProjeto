// Componente Principal App
import './contatos.css'; // Importando o arquivo CSS para esta página
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importando o JavaScript do Bootstrap
import './sobreNos';
import './Home';
import './politicaLoja';
import './cadastroUsuario';
import './login';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Componente Principal App
function Contatos() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

// Componente Header
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

// Componente Nav (menu de navegação)
function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/Home">Home</Link></li> 
        <li><Link to="/sobreNos">Sobre nós</Link></li>
        <li><Link to="/contatos">Contato</Link></li>
        <li><Link to="/cadastroUsuario">Cadastro</Link></li>
        <li><Link to="/entrar">Entrar</Link></li>
      </ul>
    </nav>
  );
}

// Componente Main (conteúdo principal)
function Main() {
  return (
    <main>
      <Carousel />
      <Map />
    </main>
  );
}

// Componente Carousel
function Carousel() {
  return (
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
  );
}

// Componente Map (informações de contato e mapa)
function Map() {
  return (
    <main className="container py-5">
      <h3 className="text-center mb-4">Entre em Contato Conosco!</h3>

      {/* Informações adicionais */}
      <div className="info-contato card p-4 shadow-sm mb-5">
        <p><strong>@ronroninha.catshop</strong></p>
        <p><strong>Telefone:</strong> (51) 99965-3534</p>
        <p><strong>Email:</strong> <a href="mailto:ronroninha.catshop@gmail.com">ronroninha.catshop@gmail.com</a></p>
        <p><strong>Horário:</strong> Terça a Sábado | 9:30 - 18:30</p>
        <p><strong>Localização:</strong> Felipe Camarão, 335 | Porto Alegre - RS</p>
      </div>

      {/* Google Maps */}
      <div className="google-map mb-5">
        <h4>Encontre-nos no Google Maps:</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.378236265076!2d-51.222477084409115!3d-30.047410557134705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951978fe407980f9%3A0x3e2d325bfaa13242!2sFelipe%20Camar%C3%A3o%2C%20335%2C%20Porto%20Alegre%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1681792453623!5m2!1spt-BR!2sbr"
          width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" />
      </div>
    </main>
  );
}

// Componente Footer
function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/sobreNos">Sobre nós</Link></li>
          <li><Link to="/politicaLoja">Política da Loja</Link></li>
          <li><Link to="/contatos">Contato</Link></li>
        </ul>
      </nav>

      <div>
        <p>@ 2025 por Ronroninha Cat Shop CNPJ 37.848.640/0001-66</p>
      </div>
    </footer>
  );
}

export default Contatos;
