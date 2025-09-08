import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductDetail() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      setProducts(resp.data);
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Pagina Prodotti</h1>
          <ul>
            {products.map((p) => (
              <li key={p.id}>
                {p.title} - € {p.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail