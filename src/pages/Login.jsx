import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (usuario === "aluno" && senha === "1234") {
      login({ nome: usuario });
      navigate("/minha-conta");
    } else {
      alert("Login inválido");
    }
  }

  return (
    <form onSubmit={handleLogin} style={{ padding: "20px" }}>
      <h2>Login</h2>

      <input
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <br /><br />

      <button type="submit">Entrar</button>
    </form>
  );
}