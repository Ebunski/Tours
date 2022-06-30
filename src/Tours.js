import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  const tourItems = props.tours.map((x) => <Tour key={x.id} {...x} />);
  return (
    <section>
      <div className="title">
        <h1>our tours</h1>
        <div className="underline"></div>
      </div>
      <div>{tourItems}</div>
    </section>
  );
};

export default Tours;
