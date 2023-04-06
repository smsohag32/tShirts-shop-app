import React from "react";
import { useLoaderData } from "react-router-dom";
import Shirt from "../Shirt/Shirt";
import "./Home.css";
const Home = () => {
  const tShirts = useLoaderData();
  console.log(tShirts);
  return (
    <div>
      <h1>Available T- Shirt: 0{tShirts.length}</h1>

      <div className="products-container">
        {tShirts.map((shirt) => (
          <Shirt key={shirt._id} shirt={shirt} />
        ))}
      </div>
    </div>
  );
};

export default Home;
