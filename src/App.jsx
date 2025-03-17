import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Product from "./components/Product.jsx"

const products = []
for(let i = 1; i < 21; i++){
  products.push(i);
} 

async function getData(id) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${id}`)
  const data = await response.json();
  console.log(data);
  return data;
}

function App() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
       const allProducts = await Promise.all(
        products.map((id) => getData(id))
      );
      setProduct(allProducts);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  
  const formatPrice = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return(
    <>
      <NavBar/>
      <Outlet />
      <div className='cards'>
          {product.map((p) => (
            <Product key={p.id} name={p.title} img={p.image} price={formatPrice(p.price)}/>
          ))}
        </div>
    </>
  )

}

export default App;