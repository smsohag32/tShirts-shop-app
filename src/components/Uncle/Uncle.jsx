import React from "react";
import Cousin from "./Cousin";

const Uncle = () => {
  return (
    <div>
      <p>Uncle</p>
      <section className="flex">
        <Cousin isFriend={true} />
      </section>
    </div>
  );
};

export default Uncle;
