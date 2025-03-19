import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importando o JavaScript do Bootstrap
import './Home.css'
import './sobreNos';
import './contatos';
import './politicaLoja';
import './cadastroUsuario';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './login'; // Mantenha essa importação, se necessário

function Home() {
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
        <li><Link to="/politicaLoja" className="nav ul li">Politica da Loja</Link></li>
        <li><Link to="/sobreNos">Sobre nós</Link></li>
        <li><Link to="/contatos">Contato</Link></li>
        <li><Link to="/cadastroUsuario">Entrar</Link></li>
      </ul>
    </nav>
  );
}

function Main() {
  return (
    <main>
      <Carousel />
      <CardsSection />
    </main>
  );
}

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

/* Cards */
function CardsSection() {
  return (
    <section className="cards-section">
      <ServiceCard
        title="COMO FUNCIONA O SERVIÇO?"
        content="Entenda os passos para contratar nossos serviços.
              Primeiramente marcamos uma visita para nos conhecermos, preenchemos um CONTRATO DE PRESTAÇÃO DE SERVIÇOS e uma FICHA DA ROTINA DO(S) GATINHO(S) bem detalhada. Essa visita tem o custo de 12 sachês de qualquer marca ou R$20, 
              que doamos para projetos que ajudam animais. Depois, quando você viajar, voltamos diariamente para cuidar do(s) peludo(s). A visita é diária (não trabalhamos em dias intercalados) e tem duração em torno de 1h. 
              Limpamos as caixinhas e potinhos, trocamos as águas, alimentamos, exercitamos, enchemos de carinho e mandamos fotos e vídeos durante cada visita, para que você se sinta presente enquanto estivermos na sua casa.
              Escovação, limpeza de olhos, nebulização e administração de medicação via oral (sob orientação veterinária) não tem custo extra. Também oferecemos serviço de CAT CARE, relacionado à saúde dos bichanos, como soroterapia,
             compressão de bexiga  e aplicação de medicações injetáveis (sob orientação veterinária) com um valor adicional ao valor da visita."
      />
      <ServiceCard
        title="SERVIÇOS VOLTADOS À SAÚDE"
        content="Descubra os cuidados que oferecemos para o bem-estar do seu pet.
              Coleta de sangue, Aferição de Pressão, Aferição de Glicemia
              Compressão de bexiga, Teste de FIV e FELV, Limpeza de sonda esofágica
              Aplicação de soro subcutâneo, Cuidados de pós operatório
              Administração de medicação via oral, Administração de medicação injetável (subcutânea)
              Nebulização, Administração de bombinha para asma."
      />
      <ServiceCard
        title="SERVIÇOS DE BEM ESTAR"
        content="Pernoite - não disponível para novos clientes, apenas para quem já é cliente da 
                Ronroninha Cat Sitter Recreação: você pode nos contratar para brincar com o(s) seu(s)s gatinho(s) quando estiver com a agenda 
                apertada ou em dias fixos da sua preferência Corte de Unhas, Limpeza de olhos, Remoção de excesso de pelo com escovação 
                Aplicação de pipetas antipulgas."
      />
      <ServiceCard
        title="POR QUE UMA EQUIPE?"
        content="Conheça os benefícios de contar com uma equipe qualificada.
              Nos tornamos uma equipe com o aumento da demanda para atender com profissionalismo todos os clientes que nos escolhem para cuidar do(s) seu(s) gatinho(s)! 
              Assim também conseguimos garantir que você será atendido caso a cat sitter tenha algum problema sério que a impossibilite de seguir os atendimentos (mas, caso aconteça, você será avisado antes). 
              Os dados de todas as babás da nossa equipe estão em todos os nossos contratos :)."
      />
      <BudgetCard />
    </section>
  );
}

function ServiceCard({ title, content }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

function BudgetCard() {
  return (
    <div className="card">
      <h3>ORÇAMENTO</h3>
      <p>
        O valor é por visita (1h de duração) e variável de acordo com a região,
        número de gatinhos e com adicional caso precise contratar também
        algum serviço de cat care. Para saber o valor no seu endereço preencha abaixo
        o formulário de pedido de orçamento com todas as informações solicitadas ❤️.
      </p>
      <Link to="/orcamento.js">
      <button className="btn-orcamento">Faça seu orçamento</button>
      </Link>
    </div>
  );
}
    
// Componente Footer
function Footer() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/sobreNos">Sobre nós</Link></li>
          <li><Link to="/politicaLoja">Politica da Loja</Link></li>
          <li><Link to="/contatos">Contatos</Link></li>
        </ul>
      </nav>

      <div>
        <p>@ 2025 por Ronroninha Cat Shop CNPJ 37.848.640/0001-66</p>
      </div>
    </div>
  );
}
export default Home;
