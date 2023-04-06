import React from "react";
import "./Shirt.css";
const Shirt = ({ shirt, handleAddCart }) => {
  return (
    <div className="product">
      <h3 className="title">{shirt.name}</h3>
      <img src={shirt.picture} alt="" />
      <p className="product-price">{shirt.price}</p>
      <button onClick={() => handleAddCart(shirt)}>Buy now</button>
    </div>
  );
};

export default Shirt;
