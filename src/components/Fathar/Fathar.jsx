import React from "react";
import Myself from "./Myself";

const Fathar = ({ ring }) => {
  return (
    <div>
      <p>Father</p>
      <section className="flex">
        <div>
          <Myself ring={ring} />
        </div>
      </section>
    </div>
  );
};

export default Fathar;
