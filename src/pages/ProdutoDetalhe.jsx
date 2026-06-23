import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProdutoById } from "../services/api";

export default function ProdutoDetalhe() {
  const { id } = useParams();

  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregar() {
      try {
        const data = await getProdutoById(id);
        setProduto(data);
      } catch (err) {
        setErro(err.message);
      } finally {
        setLoading(false);
      }
    }

    carregar();
  }, [id]);

  if (loading) return <p>Carregando produto...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{produto.title}</h1>
      <img
        src={produto.thumbnail}
        style={{ width: "300px" }}
      />
      <p>{produto.description}</p>
      <h2>R$ {produto.price}</h2>
    </div>
  );
}