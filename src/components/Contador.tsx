import React from "react";

export const Contador = () => {
  return (
    <>
      <h3>
        Contador:<small>0</small>
      </h3>
      <button className="btn btn-primary">+1</button>
      <button className="btn btn-primary">-1</button>
    </>
  );
};
