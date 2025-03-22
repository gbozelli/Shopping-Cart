import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import './components/styles/App.css';

const products = [];
for (let i = 1; i < 21; i++) {
  products.push(i);
}

async function getData(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
}

function App() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const allProducts = await Promise.all(products.map((id) => getData(id)));
      // Inicializa a propriedade `sells` como 0 para cada produto
      const productsWithSells = allProducts.map((product) => ({
        ...product,
        sells: 0,
      }));
      setProduct(productsWithSells);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  // Função para atualizar a quantidade de vendas de um produto
  const updateProduct = (id, quantity) => {
    setProduct((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, sells: quantity } : product
      )
    );
  };

  return (
    <>
      {isLoading ? (
        <div className='loading'>
          <div className='spinner'></div>
          <p>Carregando...</p>
        </div>
      ) : (
        <>
          <NavBar />
          <Outlet context={{ product, updateProduct }} />
        </>
      )}
    </>
  );
}

export default App;