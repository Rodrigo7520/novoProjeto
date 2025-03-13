import './App.css';//Para o estilo da aplicação
import React from 'react';

//Componente Principal App
function App(){
  return(
    <div className='App'>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

function Header(){
  return(
    <header>
      <h2>Minha Aplicação React</h2>
      <p>Bem vindo à minha página</p>
    </header>
  );
}

//Componente Nav {menu de navegação}
function Nav(){
  return(
    <nav>
      <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#Sobre">Sobre</a></li>
        <li><a href="#Contato">Contato</a></li>
      </ul>
    </nav>
  );
}

//Componetes Main {contedo principal}
function Main(){
  return(
    <main>
      <section id="Home">
        <h2>Home</h2>
        <p>Este é o conteúdo da seção home.</p>
      </section>
      <section id="Sobre">
        <h2>Sobre</h2>
        <p>Informações sobre a aplicação ou a empresa.</p>
      </section>
      <section id="Contato">
      <h2>Contato</h2>
      <p>Como entrar em contato com a empresa.</p>
    </section>
    </main>
  );
}

//Commponente Footer
function Footer(){
  return(
    <footer>
      <p>@ 2025 Minha Aplicação. Todos os direitos reservados</p>
    </footer>
  );
}

export default App;