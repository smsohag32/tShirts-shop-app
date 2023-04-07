import React from "react";
import Special from "../Special/Special";

const Myself = ({ ring }) => {
  return (
    <div>
      <p>MySelf</p>
      <section className="flex">
        <Special ring={ring} />
      </section>
    </div>
  );
};

export default Myself;
