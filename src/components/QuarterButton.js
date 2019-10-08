import React from "react";
import "../App.css";

const QuarterButton = props => {
  return (
    <section className="buttons">
      <button
        className="homeButtons__touchdown"
        onClick={() => props.value(props.quarterValue)}
      >
        {props.buttonValue}
      </button>
    </section>
  );
};

export default QuarterButton;