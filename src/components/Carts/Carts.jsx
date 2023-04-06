import React from "react";
import "./Carts.css";
import Cart from "../Cart/Cart";
const Carts = ({ carts, handleRemove }) => {
  let massage;
  if (carts.length === 0) {
    massage = <p>Please added products</p>;
  }
  return (
    <div className="carts-container">
      {massage}
      <p>{carts.length === 2 ? "hello" : "bye"}</p>
      {carts.map((cart) => (
        <Cart cart={cart} handleRemove={handleRemove} />
      ))}
    </div>
  );
};

export default Carts;
