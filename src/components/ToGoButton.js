import React from "react";
import "../App.css";

const ToGoButton = props => {
  return (
    <section className="buttons">
      <button
        className="homeButtons__touchdown"
        onClick={() => props.value(props.toGoValue)}
      >
        {props.buttonValue}
      </button>
    </section>
  );
};

export default ToGoButton;