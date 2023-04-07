import React, { createContext, useContext, useState } from "react";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";
import Fathar from "../Fathar/Fathar";
import Aunty from "./Aunty";

export const Diamond = createContext(null);
export const sendMoney = createContext(0);
// components
const Grandpa = () => {
  // prop drilling massage
  const ring = "diamond";
  const [money, setMoney] = useState(0);
  return (
    <sendMoney.Provider value={[money, setMoney]}>
      <Diamond.Provider value={"gold"}>
        <div className="grandpa">
          <p>Grandpa</p>
          <p>{money}</p>
          <section className="flex">
            <Uncle />
            <Fathar ring={ring} />
            <Aunty />
          </section>
        </div>
      </Diamond.Provider>
    </sendMoney.Provider>
  );
};

export default Grandpa;
