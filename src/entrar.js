// src/LoginPage.js
import React, { useState } from "react";

function LoginPage() {
  const [formData, setFormData] = useState({
    usuario: "",
    senha: ""
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
    console.log("Login enviado: ", formData);
    alert("Login realizado com sucesso!");
    // Aqui você pode implementar lógica de autenticação.
  };

  const handleForgotPassword = () => {
    alert("Funcionalidade de recuperação de senha ainda não implementada!");
    // Aqui você poderia redirecionar para uma página de recuperação de senha.
  };

  return (
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
  );
}

export default LoginPage;
