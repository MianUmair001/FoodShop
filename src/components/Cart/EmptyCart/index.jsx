import React from "react";
import "./styles.css";
import emptyCartImg from "./emptycart.png";
import { useHistory } from "react-router";
const EmptyCart = () => {
  const history =useHistory()
    return (

    <div className="emptyCart">
      <img src={emptyCartImg} alt="emptyCart" />
      <button onClick={() =>history.push('/')}>
        <i className="fas fa-long-arrow-alt-left"></i> Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;
