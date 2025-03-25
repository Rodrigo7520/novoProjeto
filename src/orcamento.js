// src/pages/Orcamento.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './orcamento.css';

function Orcamento() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    periodo: '',
    quantidadeGatos: '',
    endereco: '',
    detalhes: '',
    horarios: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer o envio dos dados ou integração com uma API
    console.log('Dados do orçamento enviados:', formData);
    alert('Orçamento enviado com sucesso!');
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
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/sobreNos">Sobre nós</Link></li>
          <li><Link to="/contatos">Contato</Link></li>
        </ul>
      </nav>

      {/* Main */}
      <main>
        <h2>Solicite seu Orçamento</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome:</label>
            <input 
              type="text" 
              name="nome" 
              value={formData.nome} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div>
            <label>WhatsApp:</label>
            <input 
              type="text" 
              name="whatsapp" 
              value={formData.whatsapp} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div>
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div>
            <label>Período:</label>
            <input 
              type="text" 
              name="periodo" 
              value={formData.periodo} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div>
            <label>Quantidade de Gatos:</label>
            <input 
              type="number" 
              name="quantidadeGatos" 
              value={formData.quantidadeGatos} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div>
            <label>Endereço Completo:</label>
            <input 
              type="text" 
              name="endereco" 
              value={formData.endereco} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div>
            <label>Detalhe se o gato precisa de medicação ou outra manipulação:</label>
            <textarea 
              name="detalhes" 
              value={formData.detalhes} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div>
            <label>Horários:</label>
            <input 
              type="text" 
              name="horarios" 
              value={formData.horarios} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div>
            <button type="submit">Enviar Solicite Orçamento</button>
          </div>
        </form>
      </main>
    
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
            <img src="https://static.wixstatic.com/media/e17308_10816183451746eb9c410e66a4111bd0~mv2.png/v1/fill/w_111,h_83,al_c,q_85,enc_avif,quality_auto/Site-Ronroninha-logo-catshop-rodape.png" alt="Imagem 1" />
            <img src="https://static.wixstatic.com/media/e17308_f1256b17c4f748ba988b1f7975eee6be~mv2.png/v1/fill/w_164,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Site-Ronroninha-logo-catsitter-rodape2.png" alt="Imagem 2" />
        </div>

        {/* Parágrafo */}
        <div>
            <p>@ 2025 por Ronroninha Cat Shop CNPJ 37.848.640/0001-66</p>
        </div>
        </footer>
    </div>
  );
}

export default Orcamento;
