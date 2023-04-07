import React, { useContext } from "react";
import Special from "../Special/Special";
import { sendMoney } from "../Grandpa/Grandpa";

const Myself = ({ ring }) => {
  const [money, setMoney] = useContext(sendMoney);
  return (
    <div>
      <p>MySelf</p>
      <p>{money}</p>
      <button onClick={() => setMoney(money + 15)}>Send 15</button>
      <section className="flex">
        <Special ring={ring} />
      </section>
    </div>
  );
};

export default Myself;
