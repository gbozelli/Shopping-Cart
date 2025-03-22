//import { useState, useEffect } from 'react';
import Product from "./Product";
import { useOutletContext } from 'react-router-dom';
import './styles/HomePage.css'

function HomePage(){

  const {product, updateProduct} = useOutletContext();

  const formatPrice = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return(
  <div className="root">
    <div className='cards'>
          {product.map((p) => (
            <Product key={p.id} id={p.id} name={p.title} img={p.image} price={formatPrice(p.price)} updateProduct={updateProduct} sells={p.sells || 0}/>
          ))}
    </div>
  </div>
  )
}

export default HomePage;