import { useEffect, useState } from "react";
import { getProdutos } from "../../services/api";
import ProdutoCard from "./ProdutoCard";

export default function Vitrine() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [categoria, setCategoria] = useState("all");

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const data = await getProdutos();
        setProdutos(data.products);
      } catch (err) {
        setErro(err.message);
      } finally {
        setLoading(false);
      }
    }

    carregarProdutos();
  }, []);

  const produtosFiltrados =
    categoria === "all"
      ? produtos
      : produtos.filter((p) => p.category === categoria);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Carregando produtos...</p>;
  }

  if (erro) {
    return <p style={{ textAlign: "center", color: "red" }}>Erro: {erro}</p>;
  }

  return (
    <div style={{ padding: "20px" }}>

      {/* FILTRO MELHORADO */}
      <div style={{ marginBottom: "20px" }}>
        <select
          onChange={(e) => setCategoria(e.target.value)}
          value={categoria}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
            cursor: "pointer",
            background: "#fff",
          }}
        >
          <option value="all">Todas as categorias</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>

      {/* GRID de Produtos da TADS stores */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {produtosFiltrados.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}

