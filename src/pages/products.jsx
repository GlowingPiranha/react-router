export default function Products() {
  const sample = [
    { id: 1, title: "Prodotto A", price: 10 },
    { id: 2, title: "Prodotto B", price: 20 },

  ];

  return (
    <div>
      <h1>Prodotti</h1>
      <ul>
        {sample.map(p => (
          <li key={p.id}>
            {p.title} - € {p.price}
          </li>
        ))}
      </ul>

    </div>
  );
}