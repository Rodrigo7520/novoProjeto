import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Contatos from './contatos';
import SobreNos from './sobreNos';
import PoliticaLoja from './politicaLoja';
import CadastroUsuario from './cadastroUsuario';
import Login from './login';

// Componente Principal App
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <AppRoutes />
        <Main />
        <Footer />
      </div>
    </Router>
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
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/sobreNos">Sobre nós</Link></li>
        <li><Link to="/contatos">Contato</Link></li>
        <li><Link to="/cadastroUsuario">Cadastro</Link></li>
        <li><Link to="/login">Entrar</Link></li>
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

      <section className="service-description">
        <h3>Cat Sitter</h3>
        <p>SERVIÇO OFERECIDO HÁ 10 ANOS EM PORTO ALEGRE E AGORA DISPONÍVEL TAMBÉM NA REGIÃO METROPOLITANA E LITORAL NORTE DO RS!</p>
        <p>
          É uma babá de gatos que cuida do(s) seu(s) filhote(s) quando você não tem tempo ou precisa viajar.
          Atendemos na sua casa, com a proposta de interferir o mínimo possível na rotina de cada gatinho,
          levando brinquedos para exercitá-lo(s), além de muitos mimos e amor. Toda a equipe é de extrema
          confiança da fundadora da Ronroninha, treinadas para atender com eficiência e conhecimento todos os nossos clientes.
        </p>
      </section>
    </main>
  );
}

// Footer
function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li><Link to="/Home.js">Home</Link></li>
          <li><Link to="/sobreNos.js">Sobre nós</Link></li>
          <li><Link to="/politicaLoja.js">Política da Loja</Link></li>
          <li><Link to="/contatos.js">Contato</Link></li>
        </ul>
      </nav>

      <div className="footer-images">
        <img src="https://static.wixstatic.com/media/e17308_10816183451746eb9c410e66a4111bd0~mv2.png/v1/fill/w_111,h_83,al_c,q_85,enc_avif,quality_auto/Site-Ronroninha-logo-catshop-rodape.png" alt="Imagem 1" />
        <img src="https://static.wixstatic.com/media/e17308_f1256b17c4f748ba988b1f7975eee6be~mv2.png/v1/fill/w_164,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Site-Ronroninha-logo-catsitter-rodape2.png" alt="Imagem 2" />
      </div>

      <div>
        <p>@ 2025 por Ronroninha Cat Shop CNPJ 37.848.640/0001-66</p>
      </div>
    </footer>
  );
}

// Definição das Rotas
function AppRoutes() {
  return (
    <Routes>
      <Route path="/Home.js" element={<Home />} />
      <Route path="/sobreNos.js" element={<SobreNos />} />
      <Route path="/contatos.js" element={<Contatos />} />
      <Route path="/cadastroUsuario.js" element={<CadastroUsuario />} />
      <Route path="/politicaLoja.js" element={<PoliticaLoja />} />
    </Routes>
  );
}

export default App;
