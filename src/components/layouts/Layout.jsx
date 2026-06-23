import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

export default function Layout({ children }) {
  return (
    <>
      <Cabecalho />
      <main style={{ padding: "20px" }}>
        {children}
      </main>
      <Rodape />
    </>
  );
}