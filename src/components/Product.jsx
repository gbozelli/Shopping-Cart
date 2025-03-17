import { useState } from "react";
import './styles/Product.css'

function Product(props){
  const [quantity, setQuantity] = useState(0);
  const [buttonClicked, setClick] = useState(false);

  const changeClick = () => {
    if(buttonClicked === false){
      setClick(true);
    } else {
      setClick(false);
    }
  }

  const increase = () => {
    setQuantity(quantity+1);
  }

  const decrease = () => {
    if(quantity>0){
      setQuantity(quantity-1);
    }
  }

  return(
  <div className="Product">
    <img src={props.img} alt={props.name} />
    <div className="infos">
      <div id="name">{props.name}</div>
      <div id="price">{props.price}</div>
      <button id="add" onClick={changeClick}>Add to cart</button>
      {buttonClicked && (
        <div className="set">
          <button onClick={decrease}>-</button>
          <div>{quantity}</div>
          <button onClick={increase}>+</button>
        </div>
        )
      }
    </div>
  </div>
  )
}

export default Product;