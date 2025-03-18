import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Product from "./components/Product.jsx";
import './components/styles/App.css';

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

  return(
    <>
    {isLoading ? (
        <div className='loading'>
          <div className='spinner'></div>
          <p> </p>
        </div>
      ):(
      <>
        <NavBar/>
        <Outlet context={product}/> 
      </>
      )}
      
    </>
  )

}

export default App;