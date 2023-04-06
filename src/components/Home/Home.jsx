import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Shirt from "../Shirt/Shirt";
import "./Home.css";
import Shirts from "../Shirts/Shirts";
import Carts from "../Carts/Carts";
const Home = () => {
  const tShirts = useLoaderData();

  const [carts, setCarts] = useState([]);
  const handleAddCart = (product) => {
    const exist = carts.find((cart) => cart._id === product._id);
    if (exist) {
      alert("already exists");
    } else {
      const newCart = [...carts, product];
      setCarts(newCart);
    }
  };
  const handleRemove = (id) => {
    const remaining = carts.filter((cart) => cart._id !== id);
    setCarts(remaining);
  };
  console.log(carts);
  return (
    <div className="home-container">
      <Shirts handleAddCart={handleAddCart} tShirts={tShirts} />
      <Carts carts={carts} handleRemove={handleRemove} />
    </div>
  );
};

export default Home;
