export default function Botao({ texto }) {
  return (
    <button
      style={{
        marginTop: "10px",
        padding: "8px 12px",
        background: "#111",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        width: "100%",
      }}
    >
      {texto}
    </button>
  );
}