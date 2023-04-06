import React from "react";

const Cart = ({ cart, handleRemove }) => {
  console.log(cart);
  let massage;
  if (cart.length === 0) {
    massage = <p>Please added products</p>;
  }
  return (
    <div>
      {massage}
      <p>
        {cart.name} <button onClick={() => handleRemove(cart._id)}>X</button>
      </p>
    </div>
  );
};

export default Cart;
