import React, { useContext } from "react";
import Cousin from "../Uncle/Cousin";
import { Diamond } from "./Grandpa";

const Aunty = () => {
  const gold = useContext(Diamond);
  console.log(gold);
  return (
    <div>
      <p>Anty</p>
      <section>
        <div>
          <p>{gold}</p>
        </div>
        <Cousin />
      </section>
    </div>
  );
};

export default Aunty;
