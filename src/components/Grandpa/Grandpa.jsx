import React from "react";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";
import Fathar from "../Fathar/Fathar";
import Aunty from "./Aunty";
const Grandpa = () => {
  const ring = "dimond";
  return (
    <div className="grandpa">
      <p>Grandpa</p>
      <section className="flex">
        <Uncle />
        <Fathar ring={ring} />
        <Aunty />
      </section>
    </div>
  );
};

export default Grandpa;
