import React from "react";
import Shirt from "../Shirt/Shirt";

const Shirts = ({ tShirts, handleAddCart }) => {
  return (
    <div>
      <h1>Available T- Shirt: 0{tShirts.length}</h1>

      <div className="products-container">
        {tShirts.map((shirt) => (
          <Shirt key={shirt._id} handleAddCart={handleAddCart} shirt={shirt} />
        ))}
      </div>
    </div>
  );
};

export default Shirts;
