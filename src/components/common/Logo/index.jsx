import React from "react";
import "./styles.css";
import logoImg from "./logo.png";
import { useHistory } from "react-router";
const Logo = () => {
  const history = useHistory();
  return (
    <div className="logo" onClick={() => history.push("/")}>
      <div>
        <img src={logoImg} alt="logo" />
        <span>
          <b>Taste</b>
        </span>
      </div>
      <p>
        <b>Restauran and BBQs</b>
      </p>
    </div>
  );
};

export default Logo;
