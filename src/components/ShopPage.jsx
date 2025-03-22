import { useOutletContext } from 'react-router-dom';
import './styles/ShopPage.css';

function ShopPage() {
  const { product } = useOutletContext();

  // Filtra os produtos com sells > 0
  const productsWithSales = product.filter((p) => p.sells > 0);

  const formatPrice = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="shop-page">
      <h2>Produtos Comprados</h2>
      {productsWithSales.length > 0 ? (
        <div className="cards">
          {productsWithSales.map((p) => (
            <div className="Product" key={p.id}>
              <img src={p.image} alt={p.title} />
              <div className="infos">
                <div id="name">{p.title}</div>
                <div id="price">{formatPrice(p.price)}</div>
                <div>Quantidade: {p.sells}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Nenhum produto comprado ainda.</p>
      )}
    </div>
  );
}

export default ShopPage;