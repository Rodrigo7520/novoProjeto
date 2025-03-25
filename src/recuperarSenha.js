import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Replace useHistory with useNavigate
import "./recuperarSenha.css";

function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Lógica para envio de recuperação de senha
    if (email === "usuario1@exemplo.com" || email === "usuario2@exemplo.com") {
      alert("Instruções para recuperação de senha foram enviadas para o seu e-mail.");
      navigate("/entrar"); // Use navigate instead of history.push
    } else {
      alert("E-mail não encontrado. Tente novamente.");
    }
  };

  return (
    <div>
      {/* Header */}
      <header>
        <img 
          src="https://static.wixstatic.com/media/e17308_c34ca378d92440e283f79f66e720e9fe~mv2.png/v1/fill/w_156,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Site-Ronroninha-logo_edited.png" 
          alt="Logo Ronroninha Cat Sitter" 
          style={{ width: '100px', height: 'auto' }} 
        />
        <h2>Ronroninha Cat Sitter</h2>
        <p>SERVIÇO OFERECIDO HÁ 10 ANOS EM PORTO ALEGRE</p>
      </header>

      {/* Nav */}
      <nav>
        <ul>
          <li><Link to="/App">Home</Link></li>
          <li><Link to="/sobreNos">Sobre nós</Link></li>
          <li><Link to="/contatos">Contato</Link></li>
        </ul>
      </nav>

      {/* Formulário de Recuperação de Senha */}
      <main>
        <h2>Recuperação de Senha</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>E-mail:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Enviar Instruções</button>
        </form>
        <p>
          <Link to="/login">Voltar para o Login</Link> {/* Corrigir o caminho para "/login" */}
        </p>
      </main>

      {/* Footer */}
      <footer>
        <nav>
          <ul>
            <li><Link to="/homePage">Home</Link></li>
            <li><Link to="/sobreNos">Sobre nós</Link></li>
            <li><Link to="/politicaLoja">Política da Loja</Link></li>
            <li><Link to="/contatos">Contato</Link></li>
          </ul>
        </nav>

        <div className="footer-images">
          <img 
            src="https://static.wixstatic.com/media/e17308_10816183451746eb9c410e66a4111bd0~mv2.png/v1/fill/w_111,h_83,al_c,q_85,enc_avif,quality_auto/Site-Ronroninha-logo-catshop-rodape.png" 
            alt="Imagem 1" 
          />
          <img 
            src="https://static.wixstatic.com/media/e17308_f1256b17c4f748ba988b1f7975eee6be~mv2.png/v1/fill/w_164,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Site-Ronroninha-logo-catsitter-rodape2.png" 
            alt="Imagem 2" 
          />
        </div>

        <div>
          <p>@ 2025 por Ronroninha Cat Shop CNPJ 37.848.640/0001-66</p>
        </div>
      </footer>
    </div>
  );
}

export default RecuperarSenha;
