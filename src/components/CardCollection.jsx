import React from "react";

function CardCollection({ children }) {
  return (
    <section className="mx-40 my-11 flex flex-wrap justify-evenly">
     {children}
    </section>
  );
}

export default CardCollection;
