export async function getProdutos() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Erro ao carregar produtos");
  }

  return res.json();
}


export async function getProdutoById(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Erro ao carregar produto");
  }

  return res.json();
}