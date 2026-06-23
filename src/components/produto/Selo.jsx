export default function Selo({ texto }) {
  return (
    <span style={{
      background: "#222",
      color: "#fff",
      padding: "3px 8px",
      borderRadius: "5px",
      fontSize: "12px"
    }}>
      {texto}
    </span>
  );
}