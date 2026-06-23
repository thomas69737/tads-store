import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function MinhaConta() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Minha Conta</h1>

      <p>Bem-vindo, {user?.nome}</p>

      <button onClick={logout}>
        Sair
      </button>
    </div>
  );
}