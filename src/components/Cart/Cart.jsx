import React from "react";

const Cart = ({ cart, handleRemove }) => {
  console.log(cart);
  let massage;

  return (
    <div>
      <p>
        {cart.name} <button onClick={() => handleRemove(cart._id)}>X</button>
      </p>
    </div>
  );
};

export default Cart;
