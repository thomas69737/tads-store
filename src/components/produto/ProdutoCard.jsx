import { useNavigate } from "react-router-dom";
import Botao from "../ui/Botao";
import Selo from "./Selo";

export default function ProdutoCard({ produto }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/produto/${produto.id}`)}
      style={{
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
      }}
    >
      {/* IMAGEM */}
      <img
        src={produto.thumbnail}
        alt={produto.title}
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
        }}
      />

      {/* CONTEÚDO */}
      <div style={{ padding: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>

        {/* CATEGORIA */}
        <Selo texto={produto.category} />

        {/* TÍTULO */}
        <h3
          style={{
            fontSize: "15px",
            margin: 0,
            color: "#333",
          }}
        >
          {produto.title}
        </h3>

        {/* PREÇO */}
        <p
          style={{
            fontWeight: "bold",
            color: "#2ecc71",
            fontSize: "16px",
            margin: 0,
          }}
        >
          R$ {produto.price}
        </p>

        {/* BOTÃO */}
        <div onClick={(e) => e.stopPropagation()}>
          <Botao texto="Ver produto" />
        </div>
      </div>
    </div>
  );
}