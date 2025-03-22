import { useState } from "react";
import './styles/Product.css';

function Product(props) {
  const { id, name, img, price, updateProduct, sells } = props;
  const [quantity, setQuantity] = useState(sells || 0); // Inicializa com sells

  const increase = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateProduct(id, newQuantity); // Atualiza o estado no App
  };

  const decrease = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateProduct(id, newQuantity); // Atualiza o estado no App
    }
  };

  return (
    <div className="Product">
      <img src={img} alt={name} />
      <div className="infos">
        <div id="name">{name}</div>
        <div id="price">{price}</div>
        <div className="quantity-controls">
          <button onClick={decrease}>-</button>
          <div>{quantity}</div>
          <button onClick={increase}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Product;