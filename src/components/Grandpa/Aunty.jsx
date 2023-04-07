import React, { useContext } from "react";
import Cousin from "../Uncle/Cousin";
import { Diamond, sendMoney } from "./Grandpa";

const Aunty = () => {
  const gold = useContext(Diamond);
  console.log(gold);
  const [money, setMoney] = useContext(sendMoney);
  return (
    <div>
      <p>Anty</p>
      <button onClick={() => setMoney(money + 500)}>Send 500</button>
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
