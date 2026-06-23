import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProdutoPorId } from "../../services/api";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarProduto() {
      try {
        const data = await getProdutoPorId(id);
        setProduto(data);
      } catch (err) {
        setErro(err.message);
      } finally {
        setLoading(false);
      }
    }

    carregarProduto();
  }, [id]);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Carregando produto...</p>;
  }

  if (erro) {
    return <p style={{ textAlign: "center", color: "red" }}>Erro: {erro}</p>;
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        display: "flex",
        gap: "30px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {/* IMAGEM */}
      <div style={{ flex: "1" }}>
        <img
          src={produto.thumbnail}
          alt={produto.title}
          style={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        />
      </div>

      {/* INFO */}
      <div style={{ flex: "1" }}>
        <h1 style={{ marginBottom: "10px", fontSize: "24px" }}>
          {produto.title}
        </h1>

        <p style={{ color: "#666", marginBottom: "15px" }}>
          {produto.description}
        </p>

        <p
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "#2ecc71",
            marginBottom: "20px",
          }}
        >
          R$ {produto.price}
        </p>

        <button
          onClick={() => navigate(-1)}
          style={{
            padding: "10px 15px",
            background: "#111",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Voltar
        </button>
      </div>
    </div>
  );
}