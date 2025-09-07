import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>Dettaglio prodotto</h1>
      <p>ID: {id}</p>
    </div>
  );
}
