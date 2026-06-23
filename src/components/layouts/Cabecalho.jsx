export default function Cabecalho() {
  return (
  <header
  style={{
    padding: "15px 20px",
    background: "#111",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
  <h2 style={{ margin: 0 }}>🛒 TADS Store</h2>

  <nav>
    <a style={{ color: "#fff", marginRight: "15px" }} href="/">Home</a>
    <a style={{ color: "#fff" }} href="/login">Login</a>
  </nav>
</header>
  );
}

