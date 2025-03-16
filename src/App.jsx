import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const products = []
for(let i = 0; i < 20; i++){
  products.push(i);
} 

async function getData(id) {
  const response = await fetch(
    `'https://fakestoreapi.com/products/${id}`)
  const data = await response.json();
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

  return(
    <>
      <NavBar/>
      <Outlet />
      <div className='cards'>
          {product.map((p) => (
            <Card key={p.name} name={p.name} img={p.img}/>
          ))}
        </div>
    </>
  )

}

export default App;