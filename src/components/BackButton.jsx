import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const nav = useNavigate();
  return (
    <button
      onClick={() => nav(-1)}
      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded shadow"
    >
      ← Back
    </button>
  );
}
