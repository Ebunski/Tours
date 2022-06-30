import React, { useState } from "react";
import { useContext } from "react";
import { deleteContext } from "./App";

const Tour = (props) => {
  const [show, setShow] = useState(false);
  const { id, price, image, info, name } = props;
  const deleteTour = useContext(deleteContext);

  function toggleShow() {
    setShow(!show);
  }
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h2>{name}</h2>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p> {show ? info : `${info.substring(0, 200)}...`} </p>
        <button onClick={toggleShow}>{show ? "Show less" : "Read more"}</button>
        <button onClick={() => deleteTour(id)} className="delete-btn">
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
