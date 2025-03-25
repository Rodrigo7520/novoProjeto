import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // For navigation
import { Link } from 'react-router-dom'; // For the Link component
import './login.css';
import './sobreNos';
import './Home';
import './politicaLoja';
import './cadastroUsuario';
import './login';
import './recuperarSenha';

function Login() {
  const [formData, setFormData] = useState({
    usuario: "",
    senha: ""
  });

  const navigate = useNavigate(); // Use the hook to navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuariosCadastrados = [
      { usuario: 'usuario1', senha: 'senha123' },
      { usuario: 'usuario2', senha: 'senha456' }
    ];

    const usuarioEncontrado = usuariosCadastrados.find(
      (user) => user.usuario === formData.usuario && user.senha === formData.senha
    );

    if (usuarioEncontrado) {
      console.log("Login enviado: ", formData);
      alert("Login realizado com sucesso!");
      // Use navigate to redirect to the homePage route
      navigate("/home");
    } else {
      alert("Usuário ou senha inválidos. Tente novamente.");
    }
  };

  const handleForgotPassword = () => {
    alert("Redirecionando para a página de recuperação de senha.");
    navigate("/recuperarSenha"); // Certifique-se de que o caminho está correto
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
          <li><Link to="/Home.js">Home</Link></li>
          <li><Link to="/sobreNos">Sobre nós</Link></li>
          <li><Link to="/contatos">Contato</Link></li>
        </ul>
      </nav>

      {/* Formulário de Login */}
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Usuário:</label>
            <input
              type="text"
              name="usuario"
              value={formData.usuario}
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
          <button type="submit">Entrar</button>
        </form>
        <button onClick={handleForgotPassword}>Esqueceu a senha?</button>
      </div>

      {/* Footer */}
      <footer>
        {/* Navegação à esquerda */}
        <nav>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/sobreNos">Sobre nós</Link></li>
            <li><Link to="/politicaLoja">Política da Loja</Link></li>
            <li><Link to="/contatos">Contato</Link></li>
          </ul>
        </nav>

        {/* Imagens à direita */}
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

        {/* Parágrafo */}
        <div>
          <p>@ 2025 por Ronroninha Cat Shop CNPJ 37.848.640/0001-66</p>
        </div>
      </footer>
    </div>
  );
}

export default Login;
