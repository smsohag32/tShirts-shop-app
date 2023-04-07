import React from "react";
import Friend from "../Friend/Friend";

const Cousin = ({ ring, isFriend }) => {
  return (
    <div>
      <p>Cousin</p>
      <section className="flex">{isFriend && <Friend>Fahrin</Friend>}</section>
    </div>
  );
};

export default Cousin;
