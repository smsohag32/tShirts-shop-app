import React, { createContext, useContext } from "react";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";
import Fathar from "../Fathar/Fathar";
import Aunty from "./Aunty";

export const Diamond = createContext(null);
// components
const Grandpa = () => {
  // prop drilling massage
  const ring = "dimond";
  return (
    <Diamond.Provider value={"gold"}>
      <div className="grandpa">
        <p>Grandpa</p>
        <section className="flex">
          <Uncle />
          <Fathar ring={ring} />
          <Aunty />
        </section>
      </div>
    </Diamond.Provider>
  );
};

export default Grandpa;
